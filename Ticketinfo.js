document.addEventListener('DOMContentLoaded', function() {
  const timeSlots = document.querySelectorAll('.time-options .time-slot, .time-options .time-slot3');
  const continueBtn = document.querySelector('.continue-btn');
  let selectedTime = null; 

  timeSlots.forEach(slot => {
      slot.addEventListener('click', function() {
          timeSlots.forEach(btn => {
              btn.classList.remove('selected');
              // Kembalikan style tombol yang bukan "time-slot3"
              if (!btn.classList.contains('time-slot3')) {
                  btn.style.background = '#B3B3B3';
              }
          });

          this.classList.add('selected');
          this.style.background = 'linear-gradient(90deg, #F03069 24%, #F8223C 78%, #FB6140 100%)';

          selectedTime = this.innerText;
          console.log('Waktu Tayang Dipilih:', selectedTime);
      });
  });

});