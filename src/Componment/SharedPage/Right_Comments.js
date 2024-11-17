// Componment/Comments
import React, { useState } from 'react';
import comm_img from '../img/comment.png';
import styles from '../Section.module.css';

function Comments() {
    const [message, setMessage] = useState('');  // message 상태를 관리
    const [isActive, setIsActive] = useState(false);    //배경색 관리
    const text = "Comment DataBase";

    const handleClick = () => {
        setMessage(prevMessage => (prevMessage ? '' : text));  // 이미지 클릭 시 'hello' 메시지 설정
        setIsActive(prevIsActive => !prevIsActive);  // 배경색 토글
        
    }
    return (
        <div className={styles.comm}>
            <div className={styles.part1}>
                <img
                    src={comm_img}
                    alt="comm_icon"
                    width="50px"
                    className={styles.comm_button} 
                    onClick={handleClick}
                />
            </div>
            <div 
                className={styles.part2}
                onClick={handleClick} 
                style={{ backgroundColor: isActive ? 'lightblue' : '#fff' }}>
                {message && <h3>{message}</h3>}  {/* message가 있으면 'hello' 출력 */}
            </div>
        </div>
    );
}

export default Comments;