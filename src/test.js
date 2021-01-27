/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Date: 2020-12-23 17:29:15
 * @LastEditors: lzg
 * @LastEditTime: 2021-01-13 11:11:58
 */


/**
 * 柯里化
 */
let times = 1
export function add () {
  const numberList = Array.from(arguments);
  console.log('1 ===>>>', numberList)
  // 进一步收集剩余参数
  const calculate = function() {
    times++
    numberList.push(...arguments);
    console.log(times, '次运行 ===>>>',numberList)
    return calculate;
  }

  // 利用 toString 隐式转换，最后执行时进行转换
  calculate.toString = function() {
    return numberList.reduce((a, b) => a + b, 0);
  }

  return calculate;
}

// 实现一个 add 方法，使计算结果能够满足以下预期
// console.log(add(1)(2)(3)); // 6
// console.log(add(1, 2, 3)(4)); // 10;
// console.log(add(1)(2)(3)(4)(5)); // 15;

/**
 * 闭包
 */
export function Foo() {
  var i = 0;
  return function() {
    console.log(++i);
  }
}

// var f1 = Foo();
// var f2 = Foo();

// f1();
// f1();
// f2();


// 防抖
export function debounce(fn) {
  let timer = null

  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, arguments)
    }, 1000)
  }
}

//节流
export function lot() {
  let timer = true
  return function() {
    if(!timer) return
    timer = false
    setTimeout(() => {
      fn.call(this, arguments)
      timer = true
    }, 1000);
  }
}

export const a = {
  a: 1,
  B: 2
}

setTimeout(() => {
  console.log('test timeout ===>>>', a)
}, 1000)