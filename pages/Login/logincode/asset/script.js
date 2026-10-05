function checkPhone() {
    const phone = document.getElementById('phone').value.trim();
    const validCodes = ['1234'];

    if (!validCodes.includes(phone)) {
        alert('کد را به درستی وارد کنید');
        return false; // جلوی رفتن به صفحه بعد را می‌گیرد
    }
    return true; // لینک کار می‌کند و به href می‌رود
}