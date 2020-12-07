import React, { useContext } from 'react';

import {ThemeContext} from '../App';


interface HelloProps{
    message?: string
}

// const Hello = (props: HelloProps) => {
//     return <h2>{props}</h2>
// }

// const Hello: React.FunctionComponent<HelloProps> = (props) =>{
//     console.log(props.children);
//     return <h2>{props.message}</h2>
// }

// React.FC 是 React.FunctionComponent的别名
// 当函数使用这个类型时，会函数模块和props会获取到来自react的一些属性
const Hello: React.FC<HelloProps> = (props) =>{
    const theme = useContext(ThemeContext);
    const style = {
        color: theme.color,
        background: theme.background
    }

    return <h2 style={style}>{props.message}</h2>
}

Hello.defaultProps = {
    message: 'hello world1'
}

export default Hello;

