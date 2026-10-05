function checkPhone() {
    const phone = document.getElementById('phone').value.trim();

    if (phone === '') {
        alert('لطفاً شماره موبایل را وارد کنید');
        return false;
    }

    localStorage.setItem("userNumber", phone);
    window.location.href = './loginpassword'; // آدرس صفحهٔ مقصد
    return false; // چون خودمان هدایت کردیم، رفتار پیش‌فرض لینک لازم نیست
}