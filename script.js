              //INDICATOR
const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
      }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));
    
              //LOADER DAN OVERLAY
document.addEventListener('DOMContentLoaded', function () {
    var loadingElement = document.querySelector('.loading');

    setTimeout(function () {
        loadingElement.style.display = 'none';
    }, 2000); // Ganti angka 2000 dengan waktu yang diinginkan dalam milidetik
});

document.addEventListener('DOMContentLoaded', function () {
    var overlayElement = document.querySelector('.overlay');

    setTimeout(function () {
        overlayElement.style.display = 'none';
    }, 2000); // Ganti angka 2000 dengan waktu yang diinginkan dalam milidetik
});

              //CONTENT
function showPage(pageId) {
  var pages = document.querySelectorAll('.content');
  pages.forEach(function(page) {
    page.style.display = 'none';
  });

  var selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = 'block';
  }
}

// Memuat halaman awal secara otomatis
window.onload = function() {
  showPage('maaf');
};

              //CODE
  document.addEventListener('DOMContentLoaded', function () {
    Prism.highlightAll();
  });

              //MENYEMBUNYIKAN NAVBAR
  //function toggleNavbar() {
      //var navbar = document.getElementById('navbar');
      //navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';}