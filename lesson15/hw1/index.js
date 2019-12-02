export function createCalculator() {
    let start = 0;

    function add(num) {
        return start += num;
    }

    function decrease(num) {
        return start -= num;
    }

    function reset(num) {
        return start = 0;
    }

    function getMemo(num) {
        return start;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}