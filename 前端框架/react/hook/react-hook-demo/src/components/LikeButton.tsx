import React, { useState } from 'react';

const LikeButton: React.FC = () => {
    const [like, setLike] = useState({count: 0, on: true});

    return <button onClick={() => setLike(like + 1)}>
        {like}👍
    </button>
}

export default LikeButton;