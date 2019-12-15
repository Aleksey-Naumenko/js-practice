const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
const getDayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const futureDate = new Date(date).setDate(day + days);
    return weekDays[new Date(futureDate). getDate()];
}

