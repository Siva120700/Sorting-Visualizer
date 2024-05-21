import React from 'react';
import '../bar.css';

const Bar = ({ length, color }) => {
    const colors = ['#3d5af1', '#ff304f', '#83e85a'];
    const style = {
        height: `${length}px`,
        backgroundColor: colors[color],
    };
    return <div className="bar" style={style}></div>;
}

export default Bar;
