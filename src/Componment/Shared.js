import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SharedData from './DB/Shared_DB.json';
import styles from "./Section.module.css";
import MainSectionWrite from './SharedPage/mainSection_write';
import Nav from './SharedPage/nav';
import Comments from './SharedPage/Right_Comments';

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
                        <Link 
                            to={article.filePath} 
                            className={styles.database}
                            target='_blank'><h4>{article.title}</h4></Link>
                        <hr/>
                    </div>
                ))}
                <button 
                    className={styles.writeButton} 
                    onClick={handleWriteClick}>
                    Write
                </button>
                {/* isWrite가 true일 때만 MainSectionWrite 컴포넌트 표시 */}
                {isWrite && <MainSectionWrite />}   {/*동적 생성이라는데.. */}
            </div>
            <Comments />
        </div>
    );
}
export default Shared;
