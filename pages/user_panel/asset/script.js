// =====================================================
// 1. آکاردئون پنل کاربری (باز و بسته شدن ردیف‌ها)
// =====================================================
function togglePanel(btn) {
    const body = btn.parentElement.querySelector(".panel-body");
    const chevron = btn.querySelector(".panel-chevron");
    body.classList.toggle("hidden");
    chevron.classList.toggle("rotate-180");
}


// =====================================================
// 2. آدرس‌ها (لیست + مودال + نقشه)
// =====================================================
let addresses = [];
let addrMap = null;
let addrMarker = null;
let addrLat = 35.6997; //firstlocationp1
let addrLng = 51.3378; //firstlocationp1

function openAddrModal() {
    document.getElementById("addrModal").classList.remove("hidden");
    setTimeout(initAddrMap, 50);
}

function closeAddrModal() {
    document.getElementById("addrModal").classList.add("hidden");
}

function initAddrMap() {
    if (addrMap) {
        addrMap.invalidateSize();
        return;
    }
    addrMap = L.map("addrMap").setView([addrLat, addrLng], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap"
    }).addTo(addrMap);
    addrMarker = L.marker([addrLat, addrLng]).addTo(addrMap);
    addrMap.on("click", function (e) {
        addrLat = e.latlng.lat;
        addrLng = e.latlng.lng;
        addrMarker.setLatLng([addrLat, addrLng]);
        fetch("https://nominatim.openstreetmap.org/reverse?format=json&accept-language=fa&lat=" + addrLat + "&lon=" + addrLng)
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (data && data.display_name) {
                    document.getElementById("m-addr-auto").value = data.display_name;
                }
            })
            .catch(function () { });
    });
}
function locateMe() {
    navigator.geolocation.getCurrentPosition(function (pos) {
        addrMap.setview([pos.coords.latitude, pos.coords.longitude], 16);
        addrMarker.setLatLng([pos.coords.latitude, pos.coords.longitude]);
    });
}

function saveModalAddress() {
    const auto = document.getElementById("m-addr-auto").value.trim();
    const detail = document.getElementById("m-addr-detail").value.trim();
    const title = document.getElementById("m-addr-title").value.trim();
    const name = document.getElementById("m-addr-name").value.trim();
    const mobile = document.getElementById("m-addr-mobile").value.trim();
    if (!auto || !detail || !title) {
        alert("نشانی، جزئیات آدرس و عنوان آدرس لازم است");
        return;
    }
    addresses.push({ title, auto, detail, name, mobile, lat: addrLat, lng: addrLng });
    renderAddresses();
    closeAddrModal();
}

function removeAddress(i) {
    addresses.splice(i, 1);
    renderAddresses();
}
function renderAddresses() {
    const list = document.getElementById("addr-list");
    const empty = document.getElementById("addr-empty");
    let html = "";
    for (let i = 0; i < addresses.length; i++) {
        const a = addresses[i];
        html += '<li class="flex items-center justify-between rounded-xl bg-stone-100 px-4 py-3 text-right">';
        html += '<div><p class="font-bold text-stone-800">' + a.title + '</p>';
        html += '<p class="text-xs text-stone-500">' + a.auto + "، " + a.detail + '</p></div>';
        html += '<button onclick="removeAddress(' + i + ')" class="text-stone-400 hover:text-rose-600"><i class="fa-regular fa-trash-can"></i></button>';
        html += '</li>';
    }
    list.innerHTML = html;
    if (addresses.length > 0) {
        empty.classList.add("hidden");
    } else {
        empty.classList.remove("hidden");
    }
}
// =====================================================
// 3. پشتیبانی (ارسال پیام)
// =====================================================
function sendSupport() {
    const subject = document.getElementById("sup-subject").value.trim();
    const name = document.getElementById("sup-name").value.trim();
    const phone = document.getElementById("sup-phone").value.trim();
    const email = document.getElementById("sup-email").value.trim();
    const order = document.getElementById("sup-order").value.trim();
    const message = document.getElementById("sup-message").value.trim();

    if (!subject || !name || !phone || !email || !order || !message) {
        alert("همه فیلدهای ستاره‌دار لازم است");
        return;
    }

    alert("پیام شما با موفقیت ارسال شد");
    document.getElementById("sup-subject").value = "";
    document.getElementById("sup-name").value = "";
    document.getElementById("sup-phone").value = "";
    document.getElementById("sup-email").value = "";
    document.getElementById("sup-order").value = "";
    document.getElementById("sup-message").value = "";
}


// =====================================================
// 4. کارت هدیه و کیف پول (تب‌ها + لیست)
// =====================================================
let giftTab = "sent";
let sentGifts = [];
let receivedGifts = [];
let walletBalance = 0;

function toFa(n) {
    return n.toLocaleString("fa-IR");
}

function switchGiftTab(tab) {
    giftTab = tab;
    const sentBtn = document.getElementById("tab-sent");
    const receivedBtn = document.getElementById("tab-received");
    if (tab === "sent") {
        sentBtn.className = "rounded-full bg-green-800 px-4 py-2.5 text-xs font-bold text-white";
        receivedBtn.className = "text-xs text-stone-500";
    } else {
        receivedBtn.className = "rounded-full bg-green-800 px-4 py-2.5 text-xs font-bold text-white";
        sentBtn.className = "text-xs text-stone-500";
    }
    renderGifts();
}

function buyGiftCard() {
    alert("به‌زودی: صفحه خرید کارت هدیه");
}

function renderGifts() {
    const list = document.getElementById("gift-list");
    const empty = document.getElementById("gift-empty");
    const emptyText = document.getElementById("gift-empty-text");
    const items = giftTab === "sent" ? sentGifts : receivedGifts;
    document.getElementById("sent-count").innerText = toFa(sentGifts.length);
    document.getElementById("received-count").innerText = toFa(receivedGifts.length);
    document.getElementById("wallet-balance").innerText = toFa(walletBalance);
    let html = "";
    for (let i = 0; i < items.length; i++) {
        html += '<li class="flex items-center justify-between rounded-xl bg-stone-100 px-4 py-3 text-right">';
        html += '<div><p class="font-bold text-stone-800">' + items[i].title + '</p>';
        html += '<p class="text-xs text-stone-500">' + items[i].amount + '</p></div></li>';
    }
    list.innerHTML = html;
    if (items.length > 0) {
        empty.classList.add("hidden");
    } else {
        empty.classList.remove("hidden");
        emptyText.innerText = giftTab === "sent" ? "کارت ارسالی ندارید" : "کارت دریافتی ندارید";
    }
}

renderGifts();
