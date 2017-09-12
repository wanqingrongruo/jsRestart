// 一切皆对象

var msg = "hello world"
var length = msg.length

var person = new Object()
person.name = "roni"
person.age = 25
person.eyecolor = "blue"

// literals 构造
person = { name: "devzheng", age: 26, eyecolor: "blue" }

// 函数构造对象
function person(name, age, eyecolor) {
    this.name = "zwx"
    this.age = 27
    this.eyecolor = "black"

    function changeName(name) {
        this.name = name
    }
}

var zwx = new person("ggg", 222, "red")
zwx.age = 3333
zwx.changeName("wwwwwww")

// javaScript 基于 prototype, 不基于 class

// 遍历对象的属性
for (x in person) {
    txt = txt + person[x]
}


// JavaScript 只有一种数字类型 - 都是8个字节
// 整数（不使用小数点或指数计数法）最多为 15 位
// 小数的最大位数是 17，但是浮点运算并不总是 100% 准确
// 更多: http://www.w3school.com.cn/jsref/jsref_obj_number.asp
var pi = 3.1415926
var num = 34
var kNum = 123e5
var oNnum = 0377 // 八进制
var hNum = 0xff // 十六进制