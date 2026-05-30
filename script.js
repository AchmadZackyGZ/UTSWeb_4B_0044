document.addEventListener("DOMContentLoaded", function () {
  // 1. DOM Manipulation: Portfolio Filter
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
    });
  });
});
