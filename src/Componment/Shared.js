import React, { useState } from 'react';
import SharedData from './DB/Shared_DB.json';
import styles from "./Section.module.css";
import MainSectionWrite from './Shared_ch/mainSection_write';
import Nav from './Shared_ch/nav';
import Comments from './Shared_ch/Right_Comments';

function Shared() {
    const [isWrite, setIsWrite] = useState(false);  // 상태로 컴포넌트 변경 여부 관리
    const [showData, setShowData] = useState(true);  // 데이터 목록을 보여줄지 여부를 관리

    const handleWriteClick = () => {
        setIsWrite(true);  // 버튼 클릭 시 상태 변경 (mainSection_write 컴포넌트 표시)
        setShowData(false);  // 데이터 목록 숨기기
    }

    return (
        <div className={styles.main2}>
            <Nav />
            <div className={styles.mainSection}>
                {/* isWrite가 false일 때만 데이터 목록 표시 */}
                {showData && SharedData.articles.map((article, index) => (
                    <div key={index} className={styles.articleItem}>
                        <h3>{article.title}</h3>
                        <hr/>
                    </div>
                ))}
                <button 
                    className={styles.writeButton} 
                    onClick={handleWriteClick}>
                    Write
                </button>
                {/* isWrite가 true일 때만 MainSectionWrite 컴포넌트 표시 */}
                {isWrite && <MainSectionWrite />}
            </div>
            <Comments />
        </div>
    );
}

export default Shared;
