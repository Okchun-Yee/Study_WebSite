// Componment/Calculator
import React, { useState } from 'react';
import styles from "./Section.module.css";

function evaluate(input) {  //eval 대체 함수 => 소수점 3자리까지만의 출력이 필요해서.
    try {
        // 유효성 검사: 숫자와 사칙연산 기호만 허용
        if (!/^[0-9+\-*/().\s]+$/.test(input)) {
            throw new Error("Invalid input");
        }
        // 계산 실행 (eval을 대체)
        const result = new Function(`return (${input})`)();
        // 결과를 소수점 3자리까지 포맷
        return parseFloat(result.toFixed(3)); // 필요하면 숫자로 변환

    } catch (error) {
        return "Error";
    }
}

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    
    const buttons = [
        { label: 'CE', value: 'CE' },
        { label: '+', value: '+' },
        { label: '-', value: '-' },
        { label: '*', value: '*' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '/', value: '/' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '=', value: '=' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '0', value: '0' }
    ];

    const handleButtonClick = (value) => {
        if (value === 'CE') {
            setInput('');
            setResult(null);
        } else if (value === '=') {
            try {
                setResult(evaluate(input));
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };
    return (
        <div className={styles.calculator_body}>
            <div className={styles.calculator_display}>
                <div className={styles.calculator_input}>{result !== null ? result : input || '0'}</div>
            </div>
            <div className={styles.calculator_button_part}>
                {buttons.map((button, index) => (
                    <button className={styles.calculator_button}
                        key={index}
                        onClick={() => handleButtonClick(button.value)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Calculator;