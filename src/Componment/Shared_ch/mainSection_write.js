import React from 'react';
import styles from '../Section.module.css';

function MainSectionWrite() {
    const text = "여기에 글을 쓰면 데이터베이스에 저장이 될 예정입니다. 아직 못했음 재촉 금지"
    return (
        <div className={styles.textBoxDiv}>
            <input type='text' className={styles.titleTextBox} placeholder='제목'/>
            <hr/>
            <input
                type='text'
                className={styles.textbox}
                placeholder={text} />
        </div>
    );
}
export default MainSectionWrite;
