// Componment/Main_section
import React from 'react';
import styles from "./Section.module.css";

function Main_Section() {
    return (
        <div className={styles.main}>
            <div class={styles.search_container}>
                <input type="text" className={styles.search_input} placeholder="검색어를 입력하세요..." />
                <button className={styles.search_button}>검색</button>
            </div>
        </div>
    );
}

export default Main_Section;