import React, { useState } from 'react';
import styles from '../Section.module.css';

function ToDoList() {
    const [inputValue, setInputValue] = useState(""); // 상태로 입력값 관리
    const [toDoItems, setToDoItems] = useState([]); // 상태로 To-Do 항목 관리

    const handleChange = (event) => {
        setInputValue(event.target.value); // 입력값을 상태에 저장
    };

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setToDoItems([...toDoItems, { text: inputValue, isChecked: false }]); // 항목에 isChecked 상태 추가
            setInputValue(""); // 입력 필드 초기화
        }
    };

    const handleDelete = (index) => {
        setToDoItems(toDoItems.filter((_, i) => i !== index)); // 항목 삭제
    };

    const handleCheckboxChange = (index) => {
        const updatedItems = [...toDoItems];
        updatedItems[index].isChecked = !updatedItems[index].isChecked; // 개별 항목의 체크 상태 변경
        setToDoItems(updatedItems); // 상태 업데이트
    };

    return (
        <div style={{ width: '100%' }}>
            <h2>Weekend To-Do List</h2>
            <hr className={styles.inside} />
            <div>
                <input
                    type="text"
                    className={styles.inputList}
                    value={inputValue} // 입력 필드에 상태값 연결
                    placeholder="Weekend Work"
                    onChange={handleChange} // 입력값 변경 시 상태 업데이트
                />
                <button className={styles.plusBtn} onClick={handleAdd}>+</button>
            </div>

            <div>
                {toDoItems.map((item, index) => (
                    <div key={index}>
                        <table className={styles.listTable}>
                            <tr>
                                <td className={styles.listBtn}>
                                    <input
                                        type="checkbox"
                                        id={`task${index}`}
                                        checked={item.isChecked} // 항목별 체크 상태 반영
                                        onChange={() => handleCheckboxChange(index)} // 개별 항목의 체크 상태 변경
                                    />
                                </td>
                                <td className={styles.listTd}>
                                    <label htmlFor={`task${index}`} style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
                                        {item.text}
                                    </label>
                                </td>
                                <td className={styles.listBtn}>
                                    <button onClick={() => handleDelete(index)}>X</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
