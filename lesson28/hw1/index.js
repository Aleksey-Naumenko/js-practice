export const shmoment = date => {
    const newDate = new Date(date);

    const dataObj = {
        add(name, value) {

            if (name == 'years') newDate = new Date(newDate.setFullYear(newDate.getFullYear() + value));
            if (name == 'months') newDate = new Date(newDate.setMonth(newDate.getMonth() + value));
            if (name == 'days') newDate = new Date(newDate.setDate(newDate.getDate() + value));
            if (name == 'hours') newDate = new Date(newDate.setHours(newDate.getHours() + value));
            if (name == 'minutes') newDate = new Date(newDate.setMinutes(newDate.getMinutes() + value));
            if (name == 'seconds') newDate = new Date(newDate.setSeconds(newDate.getSeconds() + value));
            if (name == 'milliseconds') newDate = new Date(newDate.setMilliseconds(newDate.getMilliseconds() + value));
            return this;
        },
        subtract(name, value) {

            if (name == 'years') newDate = new Date(newDate.setFullYear(newDate.getFullYear() - value));
            if (name == 'months') newDate = new Date(newDate.setMonth(newDate.getMonth() - value));
            if (name == 'days') newDate = new Date(newDate.setDate(newDate.getDate() - value));
            if (name == 'hours') newDate = new Date(newDate.setHours(newDate.getHours() - value));
            if (name == 'minutes') newDate = new Date(newDate.setMinutes(newDate.getMinutes() - value));
            if (name == 'seconds') newDate = new Date(newDate.setSeconds(newDate.getSeconds() - value));
            if (name == 'milliseconds') nnewDate = new Date(newDate.setMilliseconds(newDate.getMilliseconds() - value));
            return this;
        },
        result() {
            return newDate;
        },
    }
    return dataObj;
}