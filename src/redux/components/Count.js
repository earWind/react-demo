import React from "react";
import { connect } from "react-redux";

// 组件
const Count = ({ count, handle }) => {
    return (
        <div>
            <button onClick={() => handle(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => handle(2)}>-</button>
        </div>
    );
};

const handle = (type) => ({
    type: type === 1 ? "ADD_COUNT" : "SUB_COUNT", // type为毕传值
    elsePrama: [], // 其他参数
});

// 获取store
const mapStateToProps = (state) => ({
    count: state.count,
});

// 设置store
const mapDispatchToProps = (dispatch) => ({
    handle: (type) => dispatch(handle(type)),
});

// connect连接React组件与 Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Count);