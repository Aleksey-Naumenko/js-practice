export const getDiff = (startDate, endDate) => {
    let timeStamp = new Date(endDate) - new Date(startDate);
    console.log(timeStamp);

    let permRest;
    let diff = [];
    
    const standarts = {
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000
    }

    for (let key in standarts) {
        let d = new Date(endDate) - new Date(startDate);
        permRest = timeStamp % standarts[key];
        diff.push(Math.floor(timeStamp / standarts[key]));
        timeStamp = permRest;
    }

    return `${diff[0]}d ${diff[1]}h ${diff[2]}m ${diff[3]}s`;
}