// Ambil elemen ikon dan daftar menu
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');

// Tambahkan event listener untuk klik pada ikon
menuIcon.addEventListener('click', () => {
    // Toggle class "show" pada daftar menu
    menuList.classList.toggle('show');
});

const text = "Selamat datang di aplikasi Dayah Madinatuddiniyah Babussalam."; // Teks yang akan dianimasikan
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');

let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index); // Menambahkan satu karakter
        index++;
        setTimeout(type, 30); // Waktu delay antar karakter (dalam milidetik)
    } else {
        cursor.style.display = 'none'; // Menyembunyikan kursor setelah selesai
    }
}

// Memulai animasi
type();