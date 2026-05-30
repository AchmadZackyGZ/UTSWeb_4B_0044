document.addEventListener("DOMContentLoaded", function () {
  // DOM Manipulation: Portfolio Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Hapus class active dari semua tombol
      filterBtns.forEach((b) => b.classList.remove("active", "btn-light"));
      filterBtns.forEach((b) => b.classList.add("btn-outline-light"));

      // Tambahkan class active ke tombol yang diklik
      this.classList.remove("btn-outline-light");
      this.classList.add("active", "btn-light");

      const filterValue = this.getAttribute("data-filter");

      // Tampilkan/Sembunyikan elemen DOM
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// DOM Manipulation: Dynamic Price Calculator
const costItems = document.querySelectorAll(".cost-item");
const studentDiscount = document.getElementById("studentDiscount");
const totalPriceElement = document.getElementById("totalPrice");

function calculateTotal() {
  let total = 0;

  // Tambahkan harga dari setiap layanan yang dicentang
  costItems.forEach((item) => {
    if (item.checked) {
      total += parseInt(item.value);
    }
  });

  // Kalkulasi diskon mahasiswa: potongan 20% berarti harga akhir adalah 80% dari total
  if (studentDiscount.checked) {
    total = total * 0.8;
  }

  // Format angka ke format Rupiah secara dinamis
  totalPriceElement.textContent = "Rp " + total.toLocaleString("id-ID");
}
