export function createLogger() {
    let data = [];
    
    function warn(string) {
        return data.push(
            {
            message: string,
            dateTime: new Date(),
            type: 'warn',
            });
    }

    function error(string) {
        return data.push(
            {
            message: string,
            dateTime: new Date(),
            type: 'error',
            });
    }

    function log(string) {
        return data.push(
            {
            message: string,
            dateTime: new Date(),
            type: 'log',
            });
    }

    function getRecords(str) {
        
        return !str ? data : data
            .filter(item => item.type === str)
            .sort((a, b) => b.dateTime.getDate() - a.dateTime.getDate());

    }

    return {
        warn,
        error,
        log,
        getRecords,
    }
}

// let loger = createLogger();
// // loger.warn('Be careful');
// loger.error('We got error here');
// // loger.log('No more chance');
// console.log(loger.getRecords('error'));