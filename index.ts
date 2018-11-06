/**
 * 布尔类型
 * 数字类型
 * 字符串类型
 * 元祖类型(tuple)
 * 枚举类型(enum)
 * 任意类型(any)
 * null和undefind
 * void 类型
 * never类型
 * 
 * 
 * ts中必须指定类型
 * 
 * 
 * var flag:boolean = true
flag=123;  报错


var num:number=123
num = 'str'报错

//1,第一种定义数组的方式
var arr:number[]=[1,2,3]

//2,第二种定义数组的方式
var arr:Array<string>=[11,12,33]

//3,第三种定义数组的方式
var arr:any[]=['12','a',1,true]

// 元祖类型（tuple） 属于数组一种
let arr:[number,string]=[12,"22"]

枚举类型<enum>
随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据
例如：性别，月份，星期几，颜色，单位名，学历，职业等，都不是数值数据
在其他程序中用自然语言中有相应含义的单词代表某一状态，则程序就很容易阅读和理解，
也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示他的每一个值
这种方法称为枚举方法，用这种方法定义的类型称为枚举类型
以前 1success 0 error
pay_status1

enum 枚举名{
    标识符[=整型常数]
    标识符[=整型常数]
    标识符[=整型常数]
    .....
}

enum flag{success=1,error=0}
let f:flag=flag.error

enum Color{blue,red,'orange'}


//任意类型（any）和es5中不指定类型一样的
var num:any=123;
num='str'
num=true
用处：

var oBox = document.getElementById('box')
oBox.style.color='red' //警告它是一个Object
改为：var oBox:Object = document.getElementById('box')
又错了 Object不是基本类型
那么：oBox:any= document.getElementById('box')




null 和undefined 其它（nerver类型） 数据类型的子类型
var num:number
console.log(num) //输出 undefined 报错

var num:undefined
console.log(num) //输出 undefined 正确

// 定义没有赋值就是undefined
var num:number|undefined
console.log(num) //输出 undefined 正确
 * 
 * 
 * var num:null;
 * num=123//报错
 * num=null 正确
 * 
 * 
 * //一个元素可能是number类型 可能是null 可能是undefined
 * var num:number |null |undefined
 * 
 * void表示方法没有返回任何类型
 * function sum():void{}
 * 
 * //nerver类型 是其他类型（包括null和undefined）的子类型 代表从不会出现的值
 *这意味着声明 nerver变量只能被nerver类型所赋值

 var a:undefined
a=undefined

var b:null
b=null

var a:nerver
a=123;报错
a=(()=>{
       throw new Error('错误')                                                          
})()
 
*/
