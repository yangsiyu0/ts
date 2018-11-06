/*
泛型，软件工程中，我们不仅要创建一致的定义良好的api，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，
这在创建大型系统时为你提供了十分灵活的功能。

在像c#和java这样的语言中，可以使用泛型来创建可复用的组件，一个组件可以支持多种类型的数据，这样用户就可以以自己的数据类型来使用组件

通俗理解 泛型就是解决 类 接口 方法的复用性 以及对不特定数据类型的支持(类型校验)




泛型的定义
泛型函数
泛型类
泛型接口
*/

// function getData(value:string):string{
//     return value;
// }
// //只能返回 string类型数据
//同时返回 string 和Number类型
// function getData1(value:string):string{
//      return value;
//  }
//  function getData2(value:number):number{
//     return value;
// }
//any 可以解决这个问题 any放弃了类型检查  比如：传入number类型必须返回number类型  传入string必须返回string类型
function getData1(value:any):any{
    return value;
}


//泛型 可以支持不特定的数据类型 要求 传入的参数和返回的参数必须一致
function getData2<T>(value:T):T{ //尖括号表示的是泛型
    return value;
}
getData2<number>(123);
getData2<string>('123');


//泛型类 比如有个最小堆算法 需要同时支持返回数字和字符串两种类型 通过类的泛型来实现
/**
 * class MinClass{
    public list:number[]=[];
    add(num:number){
        this.list.push(num);
    }
    min():number{
        var minNum = this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
           
        }
        return minNum;
    }
}
var m= new MinClass;
m.add(2);
m.add(3);
m.add(4);
m.min()

 * 
*/
class MinClass<T>{
    public list:T[]=[];
    add(num:T):void{
        this.list.push(num);
    }
    min():T{
        var minNum = this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
           
        }
        return minNum;
    }
}
var m= new MinClass<number>(); /*实例化类 并且制定了类的T代表的类型是number*/
m.add(2);
m.add(3);
m.add(4);
m.min()

var n = new MinClass<string>();
n.add('a');
n.add('c');
n.add('d');
n.min()



// 泛型接口 
// interface Config1{
//     (value1:string,value2:string):string; //函数接口定义
// }
// var setData:Config1 = function(str1:string,str2:string):string{
//     return str1+str2;
// }
// setData('name','zs')


interface Config1{
        <T>(value1:T):T; 
    }
    var setData:Config1 = function<T>(str1:T):T{
        return str1;
    }
    setData<string>('name')

//写法2
interface Config2<T>{
    (value:T):T;
}
function getData3<T>(value:T):T{
    return value
}
var myData:Config2<string> =getData3;
myData('20')