// 箭头函数与 this
// 箭头函数不会改变 this 指向

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(`hi, my name is ${this.name}`)
  // }
  sayHi: () => {
    console.log(`hi, my name is ${this.name}`)
  },
  sayHiAsync: function () {
    // const _this = this
    // setTimeout(function () {
    //   console.log(_this.name)
    // }, 1000)

    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}
person.sayHi()
person.sayHiAsync()

// function Person(){
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // |this| 正确地指向 p 实例
//     console.log(this.age);
//   }, 1000);
// }

// var p = new Person();

