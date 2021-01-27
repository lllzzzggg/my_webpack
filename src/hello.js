
import React from 'react'
import ReactDOM from 'react-dom'
import './hello.less'

class Hello extends React.Component {
  componentDidMount(){
    // const add = (...args) => args.reduce((a, b) => a + b);
    // // 简化写法
    // function currying(func) {
    //   const args = [];
    //   return function result(...rest) {
    //       if (rest.length === 0) {
    //         return func(...args);
    //       } else {
    //         args.push(...rest);
    //         return result;
    //       }
    //   }
    // }

    // const sum = currying(add)
    // sum(1,2)(3); // 未真正求值
    // console.log(sum(4))
  }

  render() {
    return <div className="hello-text">dev</div>
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)