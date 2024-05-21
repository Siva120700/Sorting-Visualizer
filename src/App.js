import React, { useState, useEffect } from 'react';
import Bar from './components/Bar';
import Controls from './components/Controls';
import { bubbleSort } from './algorithms/bubbleSort';
import { selectionSort } from './algorithms/selectionSort';
import { mergeSort } from './algorithms/mergeSort';
import { insertionSort } from './algorithms/insertionSort';
import './App.css';

const ALGORITHMS = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
    'Merge Sort': mergeSort,
    'Insertion Sort': insertionSort,
};

const App = () => {
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [colors, setColors] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [algorithm, setAlgorithm] = useState('Bubble Sort');

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 200) + 50);
        setArray(arr);
        setSteps([arr]);
        setColors([new Array(arr.length).fill(0)]);
        setCurrentStep(0);
    };

    const sort = () => {
        const sortFunction = ALGORITHMS[algorithm];
        const steps = [];
        const colors = [];
        sortFunction(array.slice(), steps, colors);
        setSteps(steps);
        setColors(colors);
        setCurrentStep(0);
    };

    useEffect(() => {
        if (currentStep < steps.length - 1) {
            const timer = setTimeout(() => {
                setCurrentStep(currentStep + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [currentStep, steps]);

    return (
        <div className="App">
            <h1 className="header">Sorting Visualizer</h1>
            <Controls
                onSort={sort}
                onReset={resetArray}
                algorithms={Object.keys(ALGORITHMS)}
                currentAlgorithm={algorithm}
                onChangeAlgorithm={(e) => setAlgorithm(e.target.value)}
            />
            <div className="array-container">
                {steps[currentStep] && steps[currentStep].map((value, index) => (
                    <Bar key={index} length={value} color={colors[currentStep][index]} />
                ))}
            </div>
        </div>
    );
};

export default App;
