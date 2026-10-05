function getUserId(phone) {
    let users = {};
    try {
        users = JSON.parse(localStorage.getItem("hariseeh_users")) || {};
    } catch (e) {}
    if (!users[phone]) {
        users[phone] = String(Math.floor(Math.random() * 9000000000) + 1000000000);
        localStorage.setItem("hariseeh_users", JSON.stringify(users));
    }
    return users[phone];
}

(function () {
    const el = document.getElementById("shownumber4");
    if (!el) return;
    const num = localStorage.getItem("userNumber");
    el.innerText = num ? getUserId(num) : "";
})();
