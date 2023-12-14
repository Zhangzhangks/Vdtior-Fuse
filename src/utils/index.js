export function debounce(fn, delay = 500) {
    let timer = null;
    console.log(timer, 'timer纸');
    return function () {
        if (timer) {
            clearTimeout(timer);
            console.log(timer, 'stop');
        }
        timer = setTimeout(() => {
            fn.apply(this);
        }, delay);
    };
}