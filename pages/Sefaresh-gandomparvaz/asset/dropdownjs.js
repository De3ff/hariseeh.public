const btnt = document.getElementById("togglef");
const toggleshow = document.getElementById("show");


btnt.addEventListener("click", () => {
  btnt.classList.toggle("hidden");
  toggleshow.classList.toggle("hidden");
});

// دکمه سفارشی سازی
function toggleCustomize() {
  document.getElementById("show").classList.toggle("visible");
}

// دراپ داون 1 - خامه مخصوص
function toggle1() {
  document.getElementById("list1").classList.toggle("hidden");
}
function select1a() {
  document.getElementById("text1").innerText = "بدون خامه";
  document.getElementById("list1").classList.add("hidden");
  updateAdditivesPrice();
}
function select1b() {
  document.getElementById("text1").innerText = "با خامه";
  document.getElementById("list1").classList.add("hidden");
  updateAdditivesPrice();
}
function select1c() {
  document.getElementById("text1").innerText = "پر خامه";
  document.getElementById("list1").classList.add("hidden");
  updateAdditivesPrice();
}
function select1d() {
  document.getElementById("text1").innerText = "خامه فراوان";
  document.getElementById("list1").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 2 - سرشیر مخصوص
function toggle2() {
  document.getElementById("list2").classList.toggle("hidden");
}
function select2a() {
  document.getElementById("text2").innerText = "بدون سرشیر";
  document.getElementById("list2").classList.add("hidden");
  updateAdditivesPrice();
}
function select2b() {
  document.getElementById("text2").innerText = "با سرشیر";
  document.getElementById("list2").classList.add("hidden");
  updateAdditivesPrice();
}
function select2c() {
  document.getElementById("text2").innerText = "پر سرشیر";
  document.getElementById("list2").classList.add("hidden");
  updateAdditivesPrice();
}
function select2d() {
  document.getElementById("text2").innerText = "سرشیر فراوان";
  document.getElementById("list2").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 3 - روغن حیوانی (فقط 3 گزینه)
function toggle3() {
  document.getElementById("list3").classList.toggle("hidden");
}
function select3a() {
  document.getElementById("text3").innerText = "بدون روغن";
  document.getElementById("list3").classList.add("hidden");
  updateAdditivesPrice();
}
function select3b() {
  document.getElementById("text3").innerText = "با روغن";
  document.getElementById("list3").classList.add("hidden");
  updateAdditivesPrice();
}
function select3c() {
  document.getElementById("text3").innerText = "پر روغن";
  document.getElementById("list3").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 4 - دارچین
function toggle4() {
  document.getElementById("list4").classList.toggle("hidden");
}
function select4a() {
  document.getElementById("text4").innerText = "بدون دارچین";
  document.getElementById("list4").classList.add("hidden");
  updateAdditivesPrice();
}
function select4b() {
  document.getElementById("text4").innerText = "با دارچین";
  document.getElementById("list4").classList.add("hidden");
  updateAdditivesPrice();
}
function select4c() {
  document.getElementById("text4").innerText = "پر دارچین";
  document.getElementById("list4").classList.add("hidden");
  updateAdditivesPrice();
}
function select4d() {
  document.getElementById("text4").innerText = "دارچین فراوان";
  document.getElementById("list4").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 5 - کنجد
function toggle5() {
  document.getElementById("list5").classList.toggle("hidden");
}
function select5a() {
  document.getElementById("text5").innerText = "بدون کنجد";
  document.getElementById("list5").classList.add("hidden");
  updateAdditivesPrice();
}
function select5b() {
  document.getElementById("text5").innerText = "با کنجد";
  document.getElementById("list5").classList.add("hidden");
  updateAdditivesPrice();
}
function select5c() {
  document.getElementById("text5").innerText = "پر کنجد";
  document.getElementById("list5").classList.add("hidden");
  updateAdditivesPrice();
}
function select5d() {
  document.getElementById("text5").innerText = "کنجد فراوان";
  document.getElementById("list5").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 6 - شکر سفید
function toggle6() {
  document.getElementById("list6").classList.toggle("hidden");
}
function select6a() {
  document.getElementById("text6").innerText = "بدون شکر سفید";
  document.getElementById("list6").classList.add("hidden");
  updateAdditivesPrice();
}
function select6b() {
  document.getElementById("text6").innerText = "با شکر";
  document.getElementById("list6").classList.add("hidden");
  updateAdditivesPrice();
}
function select6c() {
  document.getElementById("text6").innerText = "پر شکر";
  document.getElementById("list6").classList.add("hidden");
  updateAdditivesPrice();
}
function select6d() {
  document.getElementById("text6").innerText = "شکر فراوان";
  document.getElementById("list6").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 7 - شکر قهوه‌ای
function toggle7() {
  document.getElementById("list7").classList.toggle("hidden");
}
function select7a() {
  document.getElementById("text7").innerText = "بدون شکر قهوه‌ای";
  document.getElementById("list7").classList.add("hidden");
  updateAdditivesPrice();
}
function select7b() {
  document.getElementById("text7").innerText = "با شکر قهوه‌ای";
  document.getElementById("list7").classList.add("hidden");
  updateAdditivesPrice();
}
function select7c() {
  document.getElementById("text7").innerText = "پر شکر قهوه‌ای";
  document.getElementById("list7").classList.add("hidden");
  updateAdditivesPrice();
}
function select7d() {
  document.getElementById("text7").innerText = "شکر قهوه‌ای فراوان";
  document.getElementById("list7").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 8 - عسل طبیعی
function toggle8() {
  document.getElementById("list8").classList.toggle("hidden");
}
function select8a() {
  document.getElementById("text8").innerText = "بدون عسل";
  document.getElementById("list8").classList.add("hidden");
  updateAdditivesPrice();
}
function select8b() {
  document.getElementById("text8").innerText = "با عسل";
  document.getElementById("list8").classList.add("hidden");
  updateAdditivesPrice();
}
function select8c() {
  document.getElementById("text8").innerText = "پر عسل";
  document.getElementById("list8").classList.add("hidden");
  updateAdditivesPrice();
}
function select8d() {
  document.getElementById("text8").innerText = "عسل فراوان";
  document.getElementById("list8").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 9 - پودر نارگیل چرب
function toggle9() {
  document.getElementById("list9").classList.toggle("hidden");
}
function select9a() {
  document.getElementById("text9").innerText = "بدون پودر نارگیل";
  document.getElementById("list9").classList.add("hidden");
  updateAdditivesPrice();
}
function select9b() {
  document.getElementById("text9").innerText = "با نارگیل";
  document.getElementById("list9").classList.add("hidden");
  updateAdditivesPrice();
}
function select9c() {
  document.getElementById("text9").innerText = "پر نارگیل";
  document.getElementById("list9").classList.add("hidden");
  updateAdditivesPrice();
}
function select9d() {
  document.getElementById("text9").innerText = "نارگیل فراوان";
  document.getElementById("list9").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 10 - معجون مغزیجات
function toggle10() {
  document.getElementById("list10").classList.toggle("hidden");
}
function select10a() {
  document.getElementById("text10").innerText = "بدون مغزیجات";
  document.getElementById("list10").classList.add("hidden");
  updateAdditivesPrice();
}
function select10b() {
  document.getElementById("text10").innerText = "با مغزیجات";
  document.getElementById("list10").classList.add("hidden");
  updateAdditivesPrice();
}
function select10c() {
  document.getElementById("text10").innerText = "پر مغزیجات";
  document.getElementById("list10").classList.add("hidden");
  updateAdditivesPrice();
}
function select10d() {
  document.getElementById("text10").innerText = "مغزیجات فراوان";
  document.getElementById("list10").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 11 - قیمه
function toggle11() {
  document.getElementById("list11").classList.toggle("hidden");
}
function select11a() {
  document.getElementById("text11").innerText = "بدون قیمه";
  document.getElementById("list11").classList.add("hidden");
  updateAdditivesPrice();
}
function select11b() {
  document.getElementById("text11").innerText = "با قیمه";
  document.getElementById("list11").classList.add("hidden");
  updateAdditivesPrice();
}
function select11c() {
  document.getElementById("text11").innerText = "پر قیمه";
  document.getElementById("list11").classList.add("hidden");
  updateAdditivesPrice();
}
function select11d() {
  document.getElementById("text11").innerText = "قیمه فراوان";
  document.getElementById("list11").classList.add("hidden");
  updateAdditivesPrice();
}

// دراپ داون 13 - سبک سرو پیشنهادی
function toggle13() {
  document.getElementById("list13").classList.toggle("hidden");
}
function change() {
  let bgchange = document.getElementById("bgchange");
  bgchange.classList.toggle("bg-green-100");
}
function select13a() {
  document.getElementById("text13").innerText = "هریسه خالص (بدون افزودنی)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "هریسه خالص (بدون افزودنی)";
  updatePrice();
}
function select13b() {
  document.getElementById("text13").innerText = "امضای هریسه(ویژه)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "امضای هریسه(ویژه)";
  updatePrice();
}
function select13c() {
  document.getElementById("text13").innerText = "اصالت جنوبی (مخصوص)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "اصالت جنوبی (مخصوص)";
  updatePrice();
}
function select13d() {
  document.getElementById("text13").innerText = "طعم طهرون(کلاسیک)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "طعم طهرون(کلاسیک)";
  updatePrice();
}
function select13e() {
  document.getElementById("text13").innerText = "عطر اشنا(کلاسیکِ شیرین)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "عطر اشنا(کلاسیکِ شیرین)";
  updatePrice();
}
function select13f() {
  document.getElementById("text13").innerText = "عیار کهن(اصیل و بدون شکر)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "عیار کهن(اصیل و بدون شکر)";
  updatePrice();
}
function select13g() {
  document.getElementById("text13").innerText = "حلاوتِ نیشکر(طعم کاراملی";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "حلاوتِ نیشکر(طعم کاراملی";
  updatePrice();
}
function select13h() {
  document.getElementById("text13").innerText = "سنت خراسان(قیمه نمکی)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "سنت خراسان(قیمه نمکی)";
  updatePrice();
}
function select13i() {
  document.getElementById("text13").innerText = "معجون دربار(پر انرژی)";
  document.getElementById("list13").classList.add("hidden");
  currentServing = "معجون دربار(پر انرژی)";
  updatePrice();
}

let sizes = {
  small: document.getElementById("small"),
  medium: document.getElementById("medium"),
  large: document.getElementById("large"),
  xl: document.getElementById("xl"),
  more: document.getElementById("more")
}

sizes.small.addEventListener("click", () => {
  sizes.small.classList.add("bg-green-200");
  sizes.small.classList.add("border-2");
  sizes.small.classList.add("border-green-600");
  sizes.small.style.border = "2px solid #16a34a";
  sizes.small.classList.remove("bg-white");


  if (sizes.medium.classList.contains("bg-green-200")) {
    sizes.medium.classList.remove("bg-green-200");
    sizes.medium.classList.add("bg-white");
    sizes.medium.classList.remove("border-2");
    sizes.medium.classList.remove("border-green-600");
    sizes.medium.style.border = "none";
  }
  if (sizes.large.classList.contains("bg-green-200")) {
    sizes.large.classList.remove("bg-green-200");
    sizes.large.classList.remove("border-2");
    sizes.large.classList.remove("border-green-600");
    sizes.large.style.border = "none";
    sizes.large.classList.add("bg-white");
  }
  if (sizes.xl.classList.contains("bg-green-200")) {
    sizes.xl.classList.remove("bg-green-200");
    sizes.xl.classList.add("bg-white");
    sizes.xl.classList.remove("border-2");
    sizes.xl.classList.remove("border-green-600");
    sizes.xl.style.border = "none";
  }
  if (sizes.more.classList.contains("bg-green-200")) {
    sizes.more.classList.remove("bg-green-200");
    sizes.more.classList.add("bg-white");
    sizes.more.classList.remove("border-2");
    sizes.more.classList.remove("border-green-600");
    sizes.more.style.border = "none";
  }
  currentSize = "small";
  let moreCustomEl = document.getElementById("moreCustom");
  if (moreCustomEl) moreCustomEl.classList.add("hidden");
  let suitableEl = document.querySelector(".suitable");
  if (suitableEl) suitableEl.innerText = "مناسب برای 1 نفر";
  updatePrice();
});

sizes.medium.addEventListener("click", () => {
  sizes.medium.classList.add("bg-green-200");
  sizes.medium.classList.add("border-2");
  sizes.medium.classList.add("border-green-600");
  sizes.medium.style.border = "2px solid #16a34a";
  sizes.medium.classList.remove("bg-white");

  if (sizes.small.classList.contains("bg-green-200")) {
    sizes.small.classList.remove("bg-green-200");
    sizes.small.classList.add("bg-white");
    sizes.small.classList.remove("border-2");
    sizes.small.classList.remove("border-green-600");
    sizes.small.style.border = "none";
  }
  if (sizes.large.classList.contains("bg-green-200")) {
    sizes.large.classList.remove("bg-green-200");
    sizes.large.classList.remove("border-2");
    sizes.large.classList.remove("border-green-600");
    sizes.large.style.border = "none";
    sizes.large.classList.add("bg-white");
  }
  if (sizes.xl.classList.contains("bg-green-200")) {
    sizes.xl.classList.remove("bg-green-200");
    sizes.xl.classList.add("bg-white");
    sizes.xl.classList.remove("border-2");
    sizes.xl.classList.remove("border-green-600");
    sizes.xl.style.border = "none";
  }
  if (sizes.more.classList.contains("bg-green-200")) {
    sizes.more.classList.remove("bg-green-200");
    sizes.more.classList.add("bg-white");
    sizes.more.classList.remove("border-2");
    sizes.more.classList.remove("border-green-600");
    sizes.more.style.border = "none";
  }
  currentSize = "medium";
  let moreCustomEl2 = document.getElementById("moreCustom");
  if (moreCustomEl2) moreCustomEl2.classList.add("hidden");
  let suitableEl2 = document.querySelector(".suitable");
  if (suitableEl2) suitableEl2.innerText = "مناسب برای 2 نفر";
  updatePrice();
});

sizes.large.addEventListener("click", () => {
  sizes.large.classList.add("bg-green-200");
  sizes.large.classList.add("border-2");
  sizes.large.classList.add("border-green-600");
  sizes.large.style.border = "2px solid #16a34a";
  sizes.large.classList.remove("bg-white");

  if (sizes.small.classList.contains("bg-green-200")) {
    sizes.small.classList.remove("bg-green-200");
    sizes.small.classList.add("bg-white");
    sizes.small.classList.remove("border-2");
    sizes.small.classList.remove("border-green-600");
    sizes.small.style.border = "none";
  }
  if (sizes.medium.classList.contains("bg-green-200")) {
    sizes.medium.classList.remove("bg-green-200");
    sizes.medium.classList.add("bg-white");
    sizes.medium.classList.remove("border-2");
    sizes.medium.classList.remove("border-green-600");
    sizes.medium.style.border = "none";
  }
  if (sizes.xl.classList.contains("bg-green-200")) {
    sizes.xl.classList.remove("bg-green-200");
    sizes.xl.classList.add("bg-white");
    sizes.xl.classList.remove("border-2");
    sizes.xl.classList.remove("border-green-600");
    sizes.xl.style.border = "none";
  }
  if (sizes.more.classList.contains("bg-green-200")) {
    sizes.more.classList.remove("bg-green-200");
    sizes.more.classList.add("bg-white");
    sizes.more.classList.remove("border-2");
    sizes.more.classList.remove("border-green-600");
    sizes.more.style.border = "none";
  }
  currentSize = "large";
  let moreCustomEl3 = document.getElementById("moreCustom");
  if (moreCustomEl3) moreCustomEl3.classList.add("hidden");
  let suitableEl3 = document.querySelector(".suitable");
  if (suitableEl3) suitableEl3.innerText = "مناسب برای 3 نفر";
  updatePrice();
});

sizes.xl.addEventListener("click", () => {
  sizes.xl.classList.add("bg-green-200");
  sizes.xl.classList.add("border-2");
  sizes.xl.classList.add("border-green-600");
  sizes.xl.style.border = "2px solid #16a34a";
  sizes.xl.classList.remove("bg-white");

  if (sizes.small.classList.contains("bg-green-200")) {
    sizes.small.classList.remove("bg-green-200");
    sizes.small.classList.add("bg-white");
    sizes.small.classList.remove("border-2");
    sizes.small.classList.remove("border-green-600");
    sizes.small.style.border = "none";
  }
  if (sizes.medium.classList.contains("bg-green-200")) {
    sizes.medium.classList.remove("bg-green-200");
    sizes.medium.classList.add("bg-white");
    sizes.medium.classList.remove("border-2");
    sizes.medium.classList.remove("border-green-600");
    sizes.medium.style.border = "none";
  }
  if (sizes.large.classList.contains("bg-green-200")) {
    sizes.large.classList.remove("bg-green-200");
    sizes.large.classList.remove("border-2");
    sizes.large.classList.remove("border-green-600");
    sizes.large.style.border = "none";
    sizes.large.classList.add("bg-white");
  }
  if (sizes.more.classList.contains("bg-green-200")) {
    sizes.more.classList.remove("bg-green-200");
    sizes.more.classList.add("bg-white");
    sizes.more.classList.remove("border-2");
    sizes.more.classList.remove("border-green-600");
    sizes.more.style.border = "none";
  }
  currentSize = "xl";
  let moreCustomEl4 = document.getElementById("moreCustom");
  if (moreCustomEl4) moreCustomEl4.classList.add("hidden");
  let suitableEl4 = document.querySelector(".suitable");
  if (suitableEl4) suitableEl4.innerText = "مناسب برای 4 نفر";
  updatePrice();
});

sizes.more.addEventListener("click", () => {
  sizes.more.classList.add("bg-green-200");
  sizes.more.classList.add("border-2");
  sizes.more.classList.add("border-green-600");
  sizes.more.style.border = "2px solid #16a34a";
  sizes.more.classList.remove("bg-white");


  if (sizes.small.classList.contains("bg-green-200")) {
    sizes.small.classList.remove("bg-green-200");
    sizes.small.classList.add("bg-white");
    sizes.small.classList.remove("border-2");
    sizes.small.classList.remove("border-green-600");
    sizes.small.style.border = "none";
  }
  if (sizes.medium.classList.contains("bg-green-200")) {
    sizes.medium.classList.remove("bg-green-200");
    sizes.medium.classList.add("bg-white");
    sizes.medium.classList.remove("border-2");
    sizes.medium.classList.remove("border-green-600");
    sizes.medium.style.border = "none";
  }
  if (sizes.large.classList.contains("bg-green-200")) {
    sizes.large.classList.remove("bg-green-200");
    sizes.large.classList.remove("border-2");
    sizes.large.classList.remove("border-green-600");
    sizes.large.style.border = "none";
    sizes.large.classList.add("bg-white");
  }
  if (sizes.xl.classList.contains("bg-green-200")) {
    sizes.xl.classList.remove("bg-green-200");
    sizes.xl.classList.add("bg-white");
    sizes.xl.classList.remove("border-2");
    sizes.xl.classList.remove("border-green-600");
    sizes.xl.style.border = "none";
  }
  currentSize = "more";
  let moreCustomEl5 = document.getElementById("moreCustom");
  if (moreCustomEl5) moreCustomEl5.classList.remove("hidden");
  let suitableEl5 = document.querySelector(".suitable");
  if (suitableEl5) suitableEl5.innerText = `مناسب برای ${Math.ceil(moreKg * 2)} نفر`;
  updatePrice();
});

// --- قیمت داینامیک مثل سایت هریسه ---
let currentSize = "large";
let currentServing = "هریسه خالص (بدون افزودنی)";
let currentAdditivesPrice = 0;

const sizePrices = {
  small: 200000,
  medium: 400000,
  large: 600000,
  xl: 800000,
  more: 1100000
};

const servingPrices = {
  "هریسه خالص (بدون افزودنی)": 0,
  "امضای هریسه(ویژه)": 0,
  "اصالت جنوبی (مخصوص)": 0,
  "طعم طهرون(کلاسیک)": 0,
  "عطر اشنا(کلاسیکِ شیرین)": 0,
  "عیار کهن(اصیل و بدون شکر)": 0,
  "حلاوتِ نیشکر(طعم کاراملی": 0,
  "سنت خراسان(قیمه نمکی)": 0,
  "معجون دربار(پر انرژی)": 0
};

let moreKg = 2.5;
function changeMore(delta) {
  moreKg = Math.max(2.5, Math.min(5, moreKg + delta));
  let moreEl = document.getElementById("moreValue");
  if (moreEl) moreEl.innerText = moreKg + " کیلو";
  sizePrices.more = Math.round(moreKg * sizePrices.medium);
  let suitableEl = document.querySelector(".suitable");
  if (suitableEl) suitableEl.innerText = `مناسب برای ${Math.ceil(moreKg * 2)} نفر`;
  updatePrice();
}

function toPersianNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،").replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function updatePrice() {
  let base = sizePrices[currentSize] || 600000;
  let servingAdd = servingPrices[currentServing] || 0;
  let total = base + servingAdd + currentAdditivesPrice;
  let formatted = toPersianNumber(total);
  let el1 = document.getElementById("mainPriceValue");
  let el2 = document.getElementById("customPriceValue");
  if (el1) el1.innerText = formatted;
  if (el2) el2.innerText = formatted;
}

function updateAdditivesPrice() {
  // هر افزودنی پر/فراوان قیمت اضافه میده مثل سایت
  let price = 0;
  const checks = [
    {id: "text1", has: "پر "},
    {id: "text2", has: "پر "},
    {id: "text3", has: "پر "},
    {id: "text4", has: "پر "},
    {id: "text5", has: "پر "},
    {id: "text6", has: "پر "},
    {id: "text7", has: "پر "},
    {id: "text8", has: "پر "},
    {id: "text9", has: "پر "},
    {id: "text10", has: "پر "},
    {id: "text11", has: "پر "}
  ];
  checks.forEach(c => {
    let el = document.getElementById(c.id);
    if (!el) return;
    let t = el.innerText;
    if (t.includes("فراوان")) price += 0;
    else if (t.includes("پر ")) price += 0;
    else if (t.includes("با ")) price += 0;
  });
  currentAdditivesPrice = price;
  updatePrice();
}