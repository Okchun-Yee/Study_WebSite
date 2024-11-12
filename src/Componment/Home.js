// Componment/Main_section
import React, { useState } from 'react';
import styles from "./Section.module.css";

function Main_Section() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSearch = () => {
        console.log(inputValue);
    };

    return (
        <div className={styles.main}>
            <div className={styles.search_container}>
                <input 
                type="text" 
                className={styles.search_input} 
                placeholder="검색어를 입력하세요..." 
                onChange={handleChange} />
                <button className={styles.search_button} onClick={handleSearch}>검색</button>
            </div>
        </div>
    );
}
export default Main_Section;