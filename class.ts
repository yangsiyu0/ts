//es5 里面的类
/**
 * 
 * function Person(name,age){
    this.name =name;
    this.age = age;
    this.run=function(){}
}
Person.getInfo=function(){}//静态方法
//原型链上的属性会被多个实例共享 构造函数属性不会
Person.prototype.sex='男'
Person.prototype.work=function(){}
var p=new Person

Person.getInfo();//调用静态方法
 * 
 * 
*/
/**
 * web类 继承Person类 原型链+对象冒充的组合继承模式
 * function web(name,age){
 *      Person.call(this,name,age);//对象冒充继承  可以继承构造函数里面的属性和方法  实例化子类可以给父类传参
 * }
 * web.prototype = new Person()//原型链继承
 * 
*/

/**
 * 类的定义
 * 继承
 * 类里面的修饰符
 * 静态属性  静态方法
 * 抽象类 继承 多态
 * 
 * 
 * **/
//ts中类的定义
class Person{
    name:string; //定义属性 前面省略了public关键词
    constructor(n:string){ //构造函数 实例化类的时候触发的方法
        this.name=n;
    }
    setName(value:string):void{
        this.name=value;
    }
    getName():string{
        console.log(this.name)
        return this.name
    }
}
let p = new Person('tim');
p.getName();


//ts继承 extends super
class Web extends Person{
   constructor(name:string){
    super(name) /* 初始化父类构造函数*/
   }
   work(){
       console.log(`${this.name}在运动`)
   }
}
let w=new Web("qq");
w.getName();



// 类里面的修饰符 三种修饰符 
//public  在类里面 子类 类外面都可以访问
// protected  在类里面 子类里面可以访问 在类外部没法访问
// private  在类里面 子类 类外部都无法访问
// public name
// var p =new personalbar('hhhh');
// p.name public定义属性可以访问
// protected name
// p.name //报错 外面不能访问
// w.work()//子类可以访问
//p.getName()//类里面可以访问

// function Fn1(){
//     this.run1=function(){//实例方法(只有实例化一个对象才能用)

//     }
// }
// Fn1.run2=function(){} //静态方法

class Person1{
    name:string; //定义属性 前面省略了public关键词
    static sex:string = 'nan'
    constructor(n:string){ //构造函数 实例化类的时候触发的方法
        this.name=n;
    }
    setName(value:string):void{
        this.name=value;
    }
    getName():string{
        console.log(this.name)
        return this.name
    }
    static work(){}//静态方法  没法直接调用类里面的属性 要想调用属性 除非属性加static 静态属性
}
let p1 = new Person1('tim');
p.getName();
Person1.work()//调用静态方法


// 多态：父类定义一个方法不去实现，让继承他的子类去实现 每一个子类有不同的表现
// 多态属于继承

class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){//具体吃什么 不知道 继承它的子类实现 每一个子类的表现不一样
        console.log("吃的方法")
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name +"吃肉" // 继承animal 然后重写方法eat 使其表现不一样 这就叫多态
    }
}
class cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name +"老鼠" // 继承animal 然后重写方法eat 使其表现不一样 这就叫多态
    }
}



// typescript 中的抽象类 它是提供其他类继承的基类 不能直接实例化
// 用abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且在派生类中实现
//abstract 抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准Animal 这个类要求他的子类必须包含eat方法
//标准如下：
abstract class Animal1{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():any;//下面继承的子类一定要含有这个方法 不然 报错
// var a =new Animal1()//c错误写法
}
class Dog1 extends Animal1 {
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
   eat (){}
}
var d = new Dog1('小花花');

