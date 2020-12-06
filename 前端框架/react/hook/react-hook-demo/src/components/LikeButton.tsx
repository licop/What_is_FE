import React, { useState, useEffect } from 'react';

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    
    // 不需要清除的effect，每次render的时候都执行
    // 第二个参数为一个数组，非必填，只用当数组里的state改变是effect才会运行
    useEffect(() => {
        document.title = `点击了${like}次`
    }, [like])

    return <>
        <button onClick={() => setLike(like + 1)}>
            {like}👍
        </button>
        <button onClick={() => setOn(!on)}>
            {on ? 'on' : 'off'}
        </button>
    </>
}

export default LikeButton;