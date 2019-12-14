const generateNumbersRange = (from, to) => {
    let range = [];

    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
};

const getLineSeats = () => generateNumbersRange(1, 10)
        .map(seatNumber =>
            `<div 
                class="sector__seat" 
                data-seat-number="${seatNumber}"
            ></div>`)
        .join('');

const getSectorLines = () => {
    const seatsString = getLineSeats();

    return generateNumbersRange(1, 10)
        .map(lineNumber =>
            `<div 
                class="sector__line" 
                data-line-number="${lineNumber}"
            >${seatsString}</div>`)
        .join('');
};


const arenaElem = document.querySelector('.arena');

const renderArena = () => {
    const linesString = getSectorLines();

    const sectorString = generateNumbersRange(1, 3)
        .map(sectorNumber =>
            `<div 
                class="sector" 
                data-sector-number="${sectorNumber}"
            >${linesString}</div>`)
        .join('');

    arenaElem.innerHTML = sectorString;
};

const onSeatSelect = (event) => {
    const seat = event.target.classList.contains('sector__seat');
    if (!seat) {
        return;
    }
    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

    const selectedSeat = document.querySelector('.board__selected-seat');

    selectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;

}

arenaElem.addEventListener('click', onSeatSelect);

renderArena();