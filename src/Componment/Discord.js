// Componment/Discord
import React, { useState } from 'react';
import { default as Calculator } from './Calculator';
import Second from './DiscordPage/Second';
import Thrid from './DiscordPage/Thrid';
import ToDoList from './DiscordPage/ToDoList';
import styles from "./Section.module.css";

function getContentStyle(isHovered, obj) {
    return {
        left: isHovered ? "50%" : "-30%",            // 숨김 위치 또는 중앙
        transform: isHovered ? "translateX(-50%)" : "translateX(0)", // 중앙으로 이동 또는 원래 위치
        backgroundColor: isHovered ? obj.hoverBgColor : obj.defaultBgColor, // 배경색 설정
    };
}

function Discord() {
    const [isHovered, setIsHovered] = useState(false);  //Nav 창 관리
    const [isWrite, setIsWrite] = useState(false);  // 상태로 컴포넌트 변경 여부 관리
    const [activeHomework, setHomework] = useState(null); // 현재 활성화된 컴포넌트

    const homework = () => {
        switch (activeHomework) {
            case 1:
                return <div  className={styles.homeWorkPage}>{activeHomework && <ToDoList />}</div>;
            case 2:
                return <div  className={styles.homeWorkPage}>{activeHomework && <Second />}</div>;
            case 3:
                return <div  className={styles.homeWorkPage}>{activeHomework && <Thrid />}</div>;
            default:
                return null; // 아무것도 표시하지 않음
        }
    };

    const handleWriteClick = () => {
        setIsWrite((prev) => !prev);  // 버튼 클릭 시 상태 변경 (mainSection_write 컴포넌트 표시)
    }
    const hoverBgColor = "#f2f2f2";  //마우스 올리면 나오는 Nav 배경색
    const defaultBgColor = "#fff";    //기본 Nav 배경색

    return (
        <div className={styles.main2}>
            <div
                className={styles.leftNav}
                style={getContentStyle(isHovered, { hoverBgColor, defaultBgColor })}
                onMouseEnter={() => setIsHovered(true)}>
                <button
                    className={styles.navCloseBtn}
                    onClick={() => setIsHovered(false)}>X</button>   {/* isWrite가 true일 때만 MainSectionWrite 컴포넌트 표시 */}
                <table className={styles.navMenu}>
                    <tr className={styles.navMenuTr}>
                        <td className={styles.navMenuTd}>
                            <button className={styles.navMenuBtn}
                                onClick={() => {
                                    setIsHovered(false);
                                    setHomework(1);
                                }}
                            >To-Do List</button></td>
                    </tr>
                    <tr className={styles.navMenuTr}>
                        <td className={styles.navMenuTd}>
                            <button className={styles.navMenuBtn}
                                onClick={() => {
                                    setIsHovered(false);
                                    setHomework(2);
                                }}
                            >버튼2</button></td>
                    </tr>
                    <tr className={styles.navMenuTr}>
                        <td className={styles.navMenuTd}>
                            <button className={styles.navMenuBtn}
                                onClick={() => {
                                    setIsHovered(false);
                                    setHomework(3);
                                }}
                            >버튼3</button></td>
                    </tr>
                </table>
            </div>
            <button
                className={styles.calCloseBtn}
                onClick={() => { handleWriteClick(); }}>
                {isWrite ? "Hide" : "Cal"} {/* 버튼 텍스트를 상태에 따라 변경 */}
            </button>
            {isWrite && <Calculator />}
            {homework()}
        </div>
    );
}
export default Discord;