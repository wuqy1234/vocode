// let defaultCustomRouteConfig = {
//     opaque: true,
//     maintainState: true,
//     transitionDuration: 300,
//     reverseTransitionDuration: 300,
//     barrierColor: '',
//     barrierDismissible: false,
//     barrierLabel: '',
//     canTransitionTo: true,
//     canTransitionFrom: true,
//     allowEnterRouteSnapshotting: false,
//     allowExitRouteSnapshotting: false,
//     fullscreenDrag: false,
//     popGestureDirection: 'horizontal'
// };
// let customRouteBuiler = function (routeContext) {
//     let primaryAnimation = routeContext.primaryAnimation, secondaryAnimation = routeContext.secondaryAnimation, userGestureInProgress = routeContext.userGestureInProgress;
//     let handlePrimaryAnimation = function () {
//         'worklet';
//         let t = primaryAnimation.value;
//         if (!userGestureInProgress.value) {
//             // select another curve, t = xxx
//         }
//         // StyleObject
//         return {};
//     };
//     let handleSecondaryAnimation = function () {
//         'worklet';
//         let t = secondaryAnimation.value;
//         if (!userGestureInProgress.value) {
//             // select another curve, t = xxx
//         }
//         // StyleObject
//         return {};
//     };
//     return {
//         opaque: true,
//         handlePrimaryAnimation: handlePrimaryAnimation,
//         handleSecondaryAnimation: handleSecondaryAnimation
//     };
// };
// // 在页面跳转前定义好 routeBuilder
// wx.router.addRouteBuilder('customRoute', customRouteBuiler)
// // 跳转新页面时，指定对应的 routeType
// wx.navigateTo({
//     url: 'xxxx',
//     routeType: 'customRoute'
// })
