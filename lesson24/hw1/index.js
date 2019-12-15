export const getDiff = (startDate, endDate) => {
    let timeStamp = Math.abs(endDate - startDate);

    let tempRest;
    let differ = [];
    
    const standarts = {
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000
    }

    for (let key in standarts) {
        tempRest = timeStamp % standarts[key];
        differ.push( Math.floor(timeStamp / standarts[key]) );
        timeStamp = tempRest;
    }

    return `${differ[0]}d ${differ[1]}h ${differ[2]}m ${differ[3]}s`;
}