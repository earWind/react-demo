/**
 * 简单路由 redux
 * 安装 yarn add redux --dev
 *
 * getState() 接收
 * dispatch(action) 更新
 * subscribe(listener) 注册监听器
 * replaceReducer(nextReducer) 返回的函数注销监听器
 *
 */
import React from "react";
import { createStore } from "redux";
import counter from "../reducers/counter";

// 创建store仓库
const counterStore = createStore(counter);

class Child1 extends React.Component {
  handel() {
    counterStore.dispatch({ type: "decrease" });
  }
  render() {
    return (
      <div>
        <button onClick={this.handel.bind(this)}>-</button>
      </div>
    );
  }
}

class Child2 extends React.Component {
  handel() {
    counterStore.dispatch({ type: "increase" });
  }
  render() {
    return (
      <div>
        <button onClick={this.handel.bind(this)}>+</button>
      </div>
    );
  }
}

class Base3Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <hr />
        <Child1 />
        <hr />
        <Child2 />
      </div>
    );
  }
  componentDidMount() {
    counterStore.subscribe(() => {
      this.setState({
        count: counterStore.getState(),
      });
    });
  }
}

export default Base3Parent;
