import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [point, setPoint] = useState({x: 0, y: 0});
    // useEffect第二个参数为空数组只有在挂载和卸载的时候执行useEffect，相当于componentDidMount
    useEffect(() => {
        console.log('add effect', point.x)

        const updateMouse = (e: MouseEvent) => {
            console.log('update mouse', point.x)
            setPoint({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updateMouse)
        // 清除effect,会在执行当前effect的时候对上一个effect进行清除
        return () => {
            console.log('remove effect', point.x)
            document.removeEventListener('click', updateMouse)
        }
    }, []);
    
    console.log('before render', point.x);
    return <p>
        x: {point.x}, y: {point.y}
    </p>
}

export default MouseTracker;
