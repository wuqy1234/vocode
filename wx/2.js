"use strict";
const customRouteBuiler = (routeContext) => {
    const { primaryAnimation } = routeContext;
    const handlePrimaryAnimation = () => {
        'worklet';
        let t = primaryAnimation.value;
        // 控制当前页的进入和退出
    };
    const handlePreviousPageAnimation = () => {
        'worklet';
        let t = primaryAnimation.value;
        // 控制上一级页面的压入和退出
    };
    return {
        handlePrimaryAnimation,
        handlePreviousPageAnimation
    };
};
