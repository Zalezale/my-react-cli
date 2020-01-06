let Fn = function () {

}

let fn = new Fn()
Object.prototype.a = function () {
    console.log('a')
}

Function.prototype.b = function () {
    console.log('b')
}
Fn.prototype.c = function () {
    console.log('c')
}
Fn.a()
Fn.b()
//Fn.c()
fn.a()
//fn.b()
fn.c()

//方法  隐式原型_pro_指向Object.prototype     方式含有prototype
//对象  隐式原型_pro_指向其构造函数的prototype  对象没有prototype


//方法的_pro_指向Function.prototype,Function的_pro_指向Object.prototype,所以方法可以访问到所有定义在前两者显示原型的属性
//对象的_pro_指向construnct_function.prototype,construnct_function.prototype_pro_指向Object.prototype,所以对象可以访问到所有定义在前两者显示原型的属性