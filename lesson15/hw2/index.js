export function createLogger() {
    let warnData = {};
    let errorData = {}; 
    let logData = {};
    // let date = new Date();


    function warn(string) {
        let date = new Date();

        return warnData = {
            message: string,
            dateTime: `${date.getHours()}:${date.getMinutes()}`,
            type: 'warn',
        };
    }

    function error(string) {
        let date = new Date();

        return errorData = {
            message: string,
            dateTime: `${date.getHours()}:${date.getMinutes()}`,
            type: 'error',
        };
    }

    function log(string) {
        let date = new Date();

        return logData = {
            message: string,
            dateTime: `${date.getHours()}:${date.getMinutes()}`,
            type: 'log',
        };
    }

    function getRecords(str) {

        switch (str) {
            case 'warn':
                return warnData;
            case 'error':
                return errorData;
            case 'log':
                return logData;
            case str: 
                return [warnData, errorData, logData]
                    .sort((a, b) => a.dateTime - b.dateTime);
            // default: 
        }
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
