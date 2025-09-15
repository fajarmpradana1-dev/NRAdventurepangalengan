function showTab(tabId) {
    // Menghilangkan kelas 'active' dari semua tombol dan konten
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Menambahkan kelas 'active' pada tombol dan konten yang dipilih
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Menampilkan tab pertama (Full Day) secara default saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showTab('full-day');
});