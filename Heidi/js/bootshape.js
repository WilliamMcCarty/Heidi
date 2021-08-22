let copyrightYear = document.getElementById('copyrightYear');
copyrightYear.textContent = new Date().getFullYear();

$(function () {
    $('.carousel').carousel('cycle');
});