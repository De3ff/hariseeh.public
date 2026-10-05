function checkPassword() {
    const password = document.getElementById('password').value.trim();
    const pasconvert = password
        .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        .replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

    if (pasconvert === '1234') {
        window.location.href = '../../user_panel/index.html';
    } else {
        alert('رمز اشتباهه');
    }
    return false;
}
