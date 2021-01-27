/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Date: 2020-12-23 17:28:15
 * @LastEditors: lzg
 * @LastEditTime: 2021-01-24 15:55:23
 */

let str = '123334445555'

function delMaxRepeat(str) {
  let arr = str.split('')
  let obj = {}
  let max = 0
  let maxArr = []

  for (let i = 0; i < arr.length; ++i) {
    let curr = arr[i]
    if (!obj[curr]) {
      obj[curr] = 1
    } else {
      obj[curr]++
    }

    if (obj[curr] > max) {
      max = obj[curr]
      maxArr = [curr]
    } else if (obj[curr] === max) {
      maxArr = [...maxArr, curr]
    }
  }

  console.log('maxArr ==>>>', maxArr)

  let res = arr.filter(i => maxArr.indexOf(i) < 0)

  return res.join('')
}

// console.log(delMaxRepeat(str))

/**
 * 如果请求成功，正常返回，
 * 如果失败，重复若干次，若成功，返回，若失败，catch
 */

let time = 0
let testFn = () => {
  return new Promise((reslove, reject) => {
    
    setTimeout(() => {
      if (time >= 3) {
        reslove('1')
      } else {
        reject('error')
      }
    }, 10)
    time++
  })
}

function reTry (fn, num) {
  // if (num === 1) return fn()
  let times = 0

  return new Promise((res,rej) => {
    function tryAgain() {
      fn()
        .then(result => {
          res(result)
        })
        .catch(err => {
          times++
          if (times === num) {
            rej(err)
          } else {
            tryAgain()
          }
        })
    }
    tryAgain()
  })
}

reTry(testFn,2)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
