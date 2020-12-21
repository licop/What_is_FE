// 自定义hooks

import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [positions, setPositions] = useState({x: 0, y: 0});

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)
        // 清除effect,会在执行当前effect的时候对上一个effect进行清除
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }

    }, []);

    return positions;
}

export default useMousePosition;
