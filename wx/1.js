"use strict";
// type AddRouteBuilder = (routeType: string, routeBuilder: CustomRouteBuilder) => void
// type CustomRouteBuilder = (routeContext: CustomRouteContext, routeOptions: Record<string, any>) => CustomRouteConfig
// interface SharedValue<T> {
//     value: T;
// }
// interface CustomRouteContext {
//     // 动画控制器，影响推入页面的进入和退出过渡效果
//     primaryAnimation: SharedValue<number>
//     // 动画控制器状态
//     primaryAnimationStatus: SharedValue<number>
//     // 动画控制器，影响栈顶页面的推出过渡效果
//     secondaryAnimation: SharedValue<number>
//     // 动画控制器状态
//     secondaryAnimationStatus: SharedValue<number>
//     // 当前路由进度由手势控制
//     userGestureInProgress: SharedValue<number>
//     // 手势开始控制路由
//     startUserGesture: () => void
//     // 手势不再控制路由
//     stopUserGesture: () => void
//     // 返回上一级，效果同 wx.navigateBack
//     didPop: () => void
// }
// interface CustomRouteConfig {
//     // 下一个页面推入后，不显示前一个页面
//     opaque?: boolean;
//     // 是否保持前一个页面状态
//     maintainState?: boolean;
//     // 页面推入动画时长，单位 ms
//     transitionDuration?: number;
//     // 页面推出动画时长，单位 ms
//     reverseTransitionDuration?: number;
//     // 遮罩层背景色，支持 rgba() 和 #RRGGBBAA 写法
//     barrierColor?: string;
//     // 点击遮罩层返回上一页
//     barrierDismissible?: boolean;
//     // 无障碍语义
//     barrierLabel?: string;
//     // 是否与下一个页面联动，决定当前页 secondaryAnimation 是否生效
//     canTransitionTo?: boolean;
//     // 是否与前一个页面联动，决定前一个页 secondaryAnimation 是否生效
//     canTransitionFrom?: boolean;
//     // 处理当前页的进入/退出动画，返回 StyleObject
//     handlePrimaryAnimation?: RouteAnimationHandler;
//     // 处理当前页的压入/压出动画，返回 StyleObject
//     handleSecondaryAnimation?: RouteAnimationHandler;
//     // 处理上一级页面的压入/压出动画，返回 StyleObject 基础库 <3.0.0> 起支持
//     handlePreviousPageAnimation?: RouteAnimationHandler;
//     // 页面进入时是否采用 snapshot 模式优化动画性能 基础库 <3.2.0> 起支持
//     allowEnterRouteSnapshotting?: boolean
//     // 页面退出时是否采用 snapshot 模式优化动画性能 基础库 <3.2.0> 起支持
//     allowExitRouteSnapshotting?: boolean
//     // 右滑返回时，可拖动范围是否撑满屏幕，基础库 <3.2.0> 起支持，常用于半屏弹窗
//     fullscreenDrag?: boolean
//     // 返回手势方向 基础库 <3.4.0> 起支持
//     popGestureDirection?: 'horizontal' | 'vertical' | 'multi'
// }
// type RouteAnimationHandler = () => { [key: string]: any }
// const defaultCustomRouteConfig = {
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
// }
// const customRouteBuiler = (routeContext: CustomRouteContext): CustomRouteConfig => {
//     const {
//         primaryAnimation,
//         secondaryAnimation,
//         userGestureInProgress
//     } = routeContext
//     const handlePrimaryAnimation: RouteAnimationHandler = () => {
//         'worklet'
//         let t = primaryAnimation.value
//         if (!userGestureInProgress.value) {
//             // select another curve, t = xxx
//         }
//         // StyleObject
//         return {}
//     }
//     const handleSecondaryAnimation: RouteAnimationHandler = () => {
//         'worklet'
//         let t = secondaryAnimation.value
//         if (!userGestureInProgress.value) {
//             // select another curve, t = xxx
//         }
//         // StyleObject
//         return {}
//     }
//     return {
//         opaque: true,
//         handlePrimaryAnimation,
//         handleSecondaryAnimation
//     }
// }
// // 在页面跳转前定义好 routeBuilder
// // wx.router.addRouteBuilder('customRoute', customRouteBuiler)
// // // 跳转新页面时，指定对应的 routeType
// // wx.navigateTo({
// //     url: 'xxxx',
// //     routeType: 'customRoute'
// // }
