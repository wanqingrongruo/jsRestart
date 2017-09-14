// BOM: browser object model

/*
Window 对象:
所有浏览器都支持 window 对象。它表示浏览器窗口
所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。
甚至 HTML DOM 的 document 也是 window 对象的属性之一
*/

/*
Window 尺寸
有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。
对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
window.innerHeight - 浏览器窗口的内部高度
window.innerWidth - 浏览器窗口的内部宽度
对于 Internet Explorer 8、7、6、5：
document.documentElement.clientHeight
document.documentElement.clientWidth
或者
document.body.clientHeight
document.body.

// eg:
var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
*/
/*
其他 Window 方法
一些其他方法：
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 调整当前窗口的尺寸
*/

/*
Screen
Window.screen
screen.avaliWidth, screen.avaliHeight

*/

/**
 * Location: 用于获得当前页面的地址,并把浏览器重定向到新的页面
 * location.hostname: 返回主机域名
 * -.pathname: 返回当前页面的路径和文件名
 * -.port: 返回主机端口
 * -.protocol: 返回web协议(http/https)
 * location.href: 返回当前页面的 url
 * location.assign: 加载新的文档
 */

/**
 * History
 * history.back() // 后退(加载历史列表中的前一个 url)
 * history.forward() // 向前(加载历史列表中的后一个 url)
 */

/**
 * Navigator
 * navigator 的数据可被浏览器使用者更改
 * 浏览器无法报告晚于浏览器发布的新操作系统
 */

/**
 * 消息框
 * 1. 警告框 alert("")
 * 2. 带有折行的警告框 alert("" + '\n' + "")
 * 3. 确认框 confirm("")
 * 4. 提示框 prompt("文本", "默认值")
 */

/**
 * 计时
 * 
 */