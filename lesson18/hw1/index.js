export function spy(func) {
	let calls = [];
    let t =  function(...args) {
        calls.push(Array.from(args));
        t.bind(func, args);
        return func.call(this, ...args);
	};
    t.calls = calls;
    return t;
}