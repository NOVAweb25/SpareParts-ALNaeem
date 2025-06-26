document.addEventListener('DOMContentLoaded', () => {
    console.log('NOVAweb website loaded');
    // إضافة تفاعلية بسيطة (مثل تنبيه ترحيبي)
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('click', () => {
        alert('مرحبًا بكم في NOVAweb!');
    });
});