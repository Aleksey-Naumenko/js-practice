export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const futureDate = new Date(date).setDate(day + days);

    return weekDays[new Date(futureDate).getDay()];
}

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
