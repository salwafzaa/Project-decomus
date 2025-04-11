document.addEventListener('DOMContentLoaded', function() {
    const seats = document.querySelectorAll('.seat.available');
    const selectedSeatsCount = document.getElementById('selected-seats-count');
    const totalPriceValue = document.getElementById('total-price-value');
    const bookNowBtn = document.getElementById('bookNowBtn');
    const seatPrice = 45000;
    let selectedSeats = [];

    function updateBookingInfo() {
        selectedSeats = document.querySelectorAll('.seats-layout .seat.selected');
        const count = selectedSeats.length;
        selectedSeatsCount.textContent = `${count} Seats`;
        totalPriceValue.textContent = (count * seatPrice).toLocaleString('id-ID');

        // tampilan tombol Book Now
        bookNowBtn.classList.toggle('disabled', count === 0);
        bookNowBtn.style.pointerEvents = count === 0 ? 'none' : 'auto';
        bookNowBtn.style.opacity = count === 0 ? 0.5 : 1;
    }

    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (seat.classList.contains('available')) {
                seat.classList.toggle('selected');
                const imgElement = seat.querySelector('img');
                if (imgElement) {
                    if (seat.classList.contains('selected')) {
                        imgElement.src = 'img/seatselected.png';
                    } else {
                        imgElement.src = seat.classList.contains('vip') ? 'img/seatvip.png' : 'img/seat.png';
                        if (!seat.classList.contains('vip')) {
                            imgElement.style.filter = '';
                            imgElement.style.opacity = '';
                        }
                    }
                }
                updateBookingInfo();
            } else if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                const imgElement = seat.querySelector('img');
                if (imgElement) {
                    imgElement.src = seat.classList.contains('vip') ? 'img/seatvip.png' : 'img/seat.png';
                    if (!seat.classList.contains('vip')) {
                        imgElement.style.filter = '';
                        imgElement.style.opacity = '';
                    }
                }
                updateBookingInfo();
            }
        });
    });

    bookNowBtn.addEventListener('click', function(event) {
        const currentSelectedSeats = document.querySelectorAll('.seats-layout .seat.selected');
        if (currentSelectedSeats.length > 0) {
            const selectedSeatsInfo = Array.from(currentSelectedSeats).map(seat => {
                const rowLabel = seat.parentNode.querySelector('.row-label')?.textContent;
                const seatIndex = Array.from(seat.parentNode.children).indexOf(seat) + 1;
                return rowLabel ? `${rowLabel}${seatIndex}` : '';
            });
            console.log(`Kursi yang Dipilih: ${selectedSeatsInfo.join(', ')}\nTotal Harga: IDR ${totalPriceValue.textContent}`);

            window.location.href = 'Ticketdetail.html';
        } else {
            alert('Silakan pilih setidaknya satu tempat duduk.');
            event.preventDefault();
        }
    });

    function markReservedSeats(reservedSeatCodes) {
        const allSeats = document.querySelectorAll('.seat');
        allSeats.forEach(seat => {
            const rowLabel = seat.parentNode.querySelector('.row-label')?.textContent;
            const seatIndex = Array.from(seat.parentNode.children).indexOf(seat) + 1;
            const seatCode = rowLabel ? `${rowLabel}${seatIndex}` : '';
            const isInitiallyReserved = seat.classList.contains('reserved');
            const imgElement = seat.querySelector('img');

            if (!isInitiallyReserved) {
                if (reservedSeatCodes.includes(seatCode)) {
                    seat.classList.remove('available', 'selected');
                    seat.classList.add('reserved');
                    seat.disabled = true;
                    if (imgElement) {
                        imgElement.src = 'img/seatreserved.png';
                        imgElement.style.filter = 'grayscale(100%)';
                        imgElement.style.opacity = '0.5';
                    }
                }
                else if (!seat.classList.contains('available') && !seat.classList.contains('selected')) {
                    seat.classList.add('available');
                    seat.disabled = false;
                    if (imgElement) {
                        imgElement.src = seat.classList.contains('vip') ? 'img/seatvip.png' : 'img/seat.png';
                        imgElement.style.filter = '';
                        imgElement.style.opacity = '';
                    }
                }
            } else {
                if (imgElement) {
                    imgElement.src = 'img/seatreserved.png';
                    imgElement.style.filter = 'grayscale(100%)';
                    imgElement.style.opacity = '0.5';
                }
                seat.disabled = true;
            }
        });
    }

});