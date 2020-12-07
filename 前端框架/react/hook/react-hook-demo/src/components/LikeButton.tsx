import React, { useState, useEffect, useRef, useContext } from 'react';
import {ThemeContext} from '../App';

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const likeRef = useRef(0);
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(ThemeContext);
    const style = {
        color: theme.color,
        background: theme.background
    }

    // 不需要清除的effect，每次render的时候都执行
    // 第二个参数为一个数组，非必填，只用当数组里的state改变是effect才会运行
    useEffect(() => {
        document.title = `点击了${like}次`
    }, [like])
    
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })

    function handleAlertClick() {
        setTimeout(() => {
            alert('you click on' + likeRef.current);
        }, 3000)
    }
    
    return <>
        <input type="text" ref={domRef}/>
        <button style={style} onClick={() => {setLike(like + 1); likeRef.current++}}>
            {like}👍
        </button>
        <button onClick={() => setOn(!on)}>
            {on ? 'on' : 'off'}
        </button>
        <button onClick={() => handleAlertClick()}>
            {'alert click'}
        </button>
    </>
}

export default LikeButton;
