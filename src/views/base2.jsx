/**
 * router -- 路由
 */
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom"; // history.push
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
  withRouter,
} from "react-router-dom"; // 锚点链接
import "../style/base2.css";

class Home extends React.Component {
  render() {
    let { props } = this;
    const param = new URLSearchParams(props.location.search);
    console.log(props, param.get("id"));
    return <p>Home {props.match.params.id}</p>;
  }
}

class Mine extends React.Component {
  clickHandel() {
    console.log(this.props);
    // this.props.history.push("/");
    this.props.history.replace("/");
  }
  render() {
    return (
      <div>
        <p>Mine</p>
        <button onClick={this.clickHandel.bind(this)}>回到home</button>
      </div>
    );
  }
}

class Err404 extends React.Component {
  render() {
    return <p>Err404！</p>;
  }
}

// 重定向
class Redi extends React.Component {
  render() {
    return <Redirect to="/" />;
  }
}

// 嵌套路由
class Book extends React.Component {
  render() {
    return (
      <div>
        <p>Book</p>
        {this.props.children}
      </div>
    );
  }
}
class Abook extends React.Component {
  render() {
    return <p>Abook</p>;
  }
}
class Bbook extends React.Component {
  render() {
    return <p>Bbook</p>;
  }
}

/**
 * 路由匹配规则
 * exact (如/home/book包含了/home路由--这时需要在Route上加exact)
 * strict (精准匹配--路由要===)
 */
class Base2App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/home",
                search: "?id=12",
                hash: "#hash",
                // state 里面的参数不会在页面显示
                state: {
                  flag: "flag",
                },
              }}
            >
              home
            </Link>
          </li>
          <li>
            {/* NavLink 高亮 */}
            <NavLink to="/mine">mine</NavLink>
          </li>
          <li>
            <NavLink to="/book">book</NavLink>
          </li>
          <li>
            <NavLink to="/book/abook">abook</NavLink>
          </li>
          <li>
            <NavLink to="/book/bbook">bbook</NavLink>
          </li>
        </ul>
        <hr />

        <Switch>
          {/* params 传参 */}
          <Route exact path="/home/:id?" component={Home}></Route>
          <Route path="/mine" component={withRouter(Mine)}></Route>
          <Route path={"/redi"} component={Redi}></Route>

          {/* 重定向 */}
          <Redirect exact path="/" to="/home"></Redirect>

          {/* 路由嵌套 */}
          <Book>
            <Switch>
              <Route path={"/book/abook"} component={Abook}></Route>
              <Route path={"/book/bbook"} component={Bbook}></Route>
            </Switch>
          </Book>

          {/* 用Switch包裹住可以让没找到的路由跳转404 */}
          <Route component={Err404}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Base2App;
