import React from "react";

class ChildA extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.moneyChange(e.target.value, "RMB");
  }

  render() {
    let { value } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

class ChildB extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.moneyChange(e.target.value, "US");
  }

  render() {
    let { value } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

class UpStateParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RMB: 7,
      US: 1,
    };
    this.moneyChange = this.moneyChange.bind(this);
  }

  moneyChange(money, type) {
    if (type === "RMB") {
      this.setState({
        RMB: money,
        US: money / 7,
      });
    } else {
      this.setState({
        RMB: money * 7,
        US: money,
      });
    }
  }

  render() {
    let { RMB, US } = this.state;
    return (
      <div>
        假设当前人民币兑美元汇率为7
        <p>RMB</p>
        <ChildA value={RMB} moneyChange={this.moneyChange} />
        <p>$</p>
        <ChildB value={US} moneyChange={this.moneyChange} />
      </div>
    );
  }
}

export default UpStateParent;
