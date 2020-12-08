/**
 * fetch 请求 -- 不用安装js本来就带有 https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 */
import React from "react";
import { Button } from "antd";
import { getBaidu } from "../api/index";

class Base1Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick() {
    getBaidu().then((res) => {
      alert(res.url);
    });
  }
  render() {
    return (
      <div>
        <h3>fetch 请求</h3>
        <Button type="primary" onClick={this.handelClick}>
          点击发起请求
        </Button>
      </div>
    );
  }

  componentDidMount() {}
}

export default Base1Fetch;
