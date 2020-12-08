/**
 * react基础api
 */
import React from "react";
import PropTypes from "prop-types";
import UpStateParent from "../components/upState";
// 函数组件
function Title(title) {
  return <h3>{title}</h3>;
}

// 受控组件
class ControllComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    // 给每个 input 上添加 name 即 对应的 state,用来处理多个input的情况
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { isGoing, numberOfGuests } = this.state;
    alert("isGoing:" + isGoing + "  numberOfGuests:" + numberOfGuests);
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

// 非受控组件
class NotControllComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ref = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("没有找到" + this.ref.current.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          search:
          <input type="text" ref={this.ref} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// 组合
class Combination extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}

// 组合
class Verify extends React.Component {
  render() {
    return (
      <p>
        {this.props.name}
        ==
        {this.props.text}
      </p>
    );
  }
}

// 类型校验
Verify.propTypes = {
  text: PropTypes.string.isRequired,
};
Verify.defaultProps = {
  name: "默认值",
};

// Class组件
class Base0Cls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isShow: false,
    };
  }

  counter = (num) => {
    let { count } = this.state;
    /* 接受第二个参数解决state异步更新问题 */
    this.setState(
      {
        count: count + num,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  displayer = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    let { name = "莉莉" } = this.props;
    let { count, isShow } = this.state;
    const books = ["《罗密欧与朱丽叶》", "《老人与海》", "《巴黎圣母院》"];
    return (
      <div>
        {Title("1.函数组件 & class组件 & props")}
        <span>Hello, {name}，props的流向只能是向下</span>
        {Title("2.state")}
        <p>
          state的更新可能是异步的? setState接受第二个参数解决state异步更新问题
        </p>
        <button onClick={() => this.counter(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => this.counter(1)}>+</button>
        {Title("3.生命周期函数")}
        componentWillUnmount componentDidMount shouldComponentUpdate
        componentDidUpdate
        {Title("4.条件渲染")}
        <p>
          <button onClick={() => this.displayer()}>
            {isShow ? "显示" : "不显示"}
          </button>
        </p>
        {Title("5.列表渲染")}
        <ul>
          {books.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {Title("6.表单受控组件")}
        <p>一般使用受控组件</p>
        <ControllComponent />
        {Title("7.表单非受控组件")}
        <NotControllComponent />
        {Title("8.状态提升")}
        <p>跟vue父子组件通信一样</p>
        <UpStateParent />
        {Title("9.组合")}
        <Combination>
          组合就是把内容放在标签内，然后再组件里通过this.props.children获取内容
        </Combination>
        {Title("10.使用 PropTypes 进行类型检查")}
        <Verify text={"text是字符串且必传"} />
      </div>
    );
  }

  // 生命周期函数
  componentWillUnmount() {
    console.log("组件渲染之前");
  }
  componentDidMount() {
    console.log("组件渲染之后");
  }
  shouldComponentUpdate() {
    console.log("数据即将更新,返回true确认更新，false不更新");
    return true;
  }
  componentDidUpdate() {
    console.log("数据更新后");
  }
  componentDidCatch() {
    console.log("数据改变");
  }
}

export default Base0Cls;
