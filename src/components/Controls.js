import React from 'react';

const Controls = ({ onSort, onReset, algorithms, currentAlgorithm, onChangeAlgorithm }) => {
    return (
        <div className="controls">
            <button onClick={onSort}>Sort</button>
            <button onClick={onReset}>Reset</button>
            <select value={currentAlgorithm} onChange={onChangeAlgorithm}>
                {algorithms.map((alg) => (
                    <option key={alg} value={alg}>
                        {alg}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Controls;
