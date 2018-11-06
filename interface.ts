/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，他定义了行为和动作的规范，在程序中设计里面，接口起到一种限制和规范的作用。
接口定义了某一批类所需遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，他只规定这批类里必须提供某些方法
提供这些方法的类就可以满足实际需要。typescript中的接口类似于java 同时还增加了更灵活的接口类型，包括属性，函数，索引和类等
定义标准
*/
/**
 * 属性类接口
 * 函数类型接口
 * 可索引接口
 * 类类型接口
 * 接口扩展
 * 
 * 
*/
//属性类接口 对json的约束

//ts中定义方法
function printLabel():void{

}
//ts中定义方法传入参数
function printLabel1(label:string):void{}

//ts中自定义方法传入参数对json进行约束
function printLabel2(labelInfo:{label:string}):void{}
// printLabel2('hhhh')报错
// printLabel2({name:"dfsdf"}) 报错
printLabel2({label:'zs'}) //正确




//对批量方法传入参数进行约束
interface FullName{
    firstName:string;// 注意;结束
    secondName:string;
}
function printName(name:FullName){
    // 必须传入对象 firstName secondName
    console.log(name.firstName+ '----' +name.secondName)
}
// printName('111')报错
// printName({age:20,firstName:'zhang',secondName:'san'}) 报错 因为接口里没有age这个属性
var obj ={
    age:20,firstName:'zhang',secondName:'san'
}
printName(obj);

function printInfo(info:FullName){
    // 必须传入对象 firstName secondName
    console.log(info.firstName+ '----' +info.secondName)
}
printInfo(obj);


//接口 可选属性
interface FullName1{
    firstName:string;// 注意;结束
    secondName?:string; //?表示可选参数
}
function getName(name:FullName1){
    
}
getName({firstName:'zhang',secondName:'san'})


// case: $ajax()
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}
function ajax(config:Config){
    var xhr = new XMLHttpRequest;
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange=function(){}
    if(xhr.readyState==4&& xhr.status==200){
        console.log('fdfs');
        if(config.dataType =='json'){
            JSON.parse(xhr.responseText)
        }
    }
}
ajax({
    type:'get',
    url:'http:www.baidu.com',
    dataType:'json'
})


//函数类型接口：对方法传入的参数 以及返回值进行约束 (可以进行批量约束)
interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string{
    return key+value
}
var sh1:encrypt = function(key:string,value:string):string{
    return key+value
}
sh1('name','sdfa')



// 可索引接口 数组，对象的约束（不常用）
var arr:number[]=[1,2]
var arr1:Array<string>=['1','2']
interface UserArr{
    [index:number]:string
}
var arr2:UserArr=['aa','bb'];

interface UserObj{  // 对对象的约束
    [index:string]:string
}
var obj1:UserObj={'name':'20'}





//类 类型接口 对类的约束 和抽象类比较相似
interface Animal {
    name:string; //属性
    eat(str:string):void  //函数
}
class Dog2 implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(this.name+'吃粮食')
    }
}

var dog =new Dog2('小黑');
dog.eat();

class Cat2 implements Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name+'吃粮食')
    }

}
// var c=new Cat2('小花');
// c.eat('老鼠');


// 接口扩展 接口可以继承接口
interface Animal11{
    eat():void;
}
interface Person4 extends Animal11{
    work():void
}

class Program{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    coding(){}
}
class Web11 extends Program implements Person4{
    constructor(name:string){
        super(name);
    }
    eat(){}
    work(){}
}
