function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// 使用
const myDebouncedFunction = debounce(() => {
    // 执行某些操作
}, 250);

window.addEventListener('resize', myDebouncedFunction);
function throttle(func, limit) {
    let inThrottle;

    return function () {
        const args = arguments;
        const context = this;

        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 使用
const myThrottledFunction = throttle(() => {
    // 执行某些操作
}, 100);

window.addEventListener('scroll', myThrottledFunction);
