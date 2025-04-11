if (document.body.id === "home") {
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const itemWidth = items[0].offsetWidth + 60; 
    let index = 0;
  
    function autoSlide() {
      index++;
      if (index > items.length - 3) {
        index = 0;
      }
      carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }
    setInterval(autoSlide, 3000);
    // Tombol manual (jika dipakai)
    document.querySelector(".prev").addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      index = Math.min(index + 1, items.length - 3);
      carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    });
  });
// now showing 
  document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.showing-track');
    const prevBtn = document.querySelector('.prev2');
    const nextBtn = document.querySelector('.next2');
    const items = document.querySelectorAll('.movie-item');

    const itemsPerPage = 5;
    let currentSlide = 0;
    const totalSlides = Math.ceil(items.length / itemsPerPage);

    function updateCarousel() {
      const containerWidth = document.querySelector('.showing-container').offsetWidth;
      const translateX = -containerWidth * currentSlide;
      track.style.transform = `translateX(${translateX}px)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); 
  });
}

//waktu
document.addEventListener("DOMContentLoaded", function () {
  const dateElements = document.querySelectorAll('.movie-dates .date');

  dateElements.forEach(date => {
    date.addEventListener('click', () => {
      // Hapus class active dari semua tanggal
      dateElements.forEach(el => el.classList.remove('active'));
      // Tambahkan class active ke tanggal yang diklik
      date.classList.add('active');
    });
  });
});
// pop up details
function cekTiket() {
  alert("Anda belum memesan tiket bioskop untuk ditonton.");
}
