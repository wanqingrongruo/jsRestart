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

// var zwx = new person("ggg", 222, "red")
// zwx.age = 3333
// zwx.changeName("wwwwwww")

// javaScript 基于 prototype, 不基于 class

// 遍历对象的属性
// for (x in person) {
//     txt = txt + person[x]
// }


// JavaScript 只有一种数字类型 - 都是8个字节
// 整数（不使用小数点或指数计数法）最多为 15 位
// 小数的最大位数是 17，但是浮点运算并不总是 100% 准确
// 更多: http://www.w3school.com.cn/jsref/jsref_obj_number.asp
var pi = 3.1415926
var num = 34
var kNum = 123e5
var oNnum = 0377 // 八进制
var hNum = 0xff // 十六进制

// string

var myString = "qwgdckjbcznmnm,cxz,cn,c,nd,d"
myString.length
myString.indexOf('j')
myString.match('bc')
var rString = myString.replace('bc', '666666')
console.log(rString)
var currentDate = Date()
var dateObj = new Date()
dateObj.setFullYear(2015, 12, 31)
var seconds = dateObj.getTime()

var today = new Date()

if (dateObj > today) {
    console.log("Today is before .....")
} else {
    console.log("Today is after .....")
}

// Array

var newArray = new Array()
newArray[0] = 111
newArray[1] = 222
newArray[2] = 333

for (x in newArray) {
    console.log(newArray[x])
}

var array02 = new Array(444, 555, 666)
console.log(newArray.concat(array02))
console.log(array02.join("/"))

Math.round(4.7) // 四舍五入
Math.random() // 0-1的随机数
console.log(Math.floor(Math.random() * 11))

// 正则

var patt1 = new RegExp("e")
console.log(patt1.test("ijdkhskjlkfgedkhd")) // 是否有值
console.log(patt1.exec("tywehdvshklcksljhjkdhklkhlkjjjjjjjjjjjjjjjjj")) // 指定值

patt1.compile("p")
console.log(patt1.test("ijdkhskjlkfgedkhd")) // 是否有值