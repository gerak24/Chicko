import React from 'react';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.title}> Главная</div>
            <div className={styles.description}>
                ООО"Антей" - это современное высокотехнологичное предприятие, которое
                занимается проектированием, строительством и реализацией каркасных домов любой сложности и площади.
                Компания использует только самые современные технологии и материалы, что позволяет достичь высокого
                качества финального продукта и максимальной устойчивости конструкции к внешним воздействиям.<br/>
                <br/>

                <div className={styles.image_container}>
                    <div className={styles.img_column}>
                        <img onClick={popup(true)} className={`${styles.img_zoomable} ${styles.left_img}`}
                             src="../../../Data/content1.jpg" alt="Ooops"/>
                    </div>
                    <div className={styles.img_column}>
                        <img onClick={popup(true)} className={`${styles.img_zoomable} ${styles.left_img}`}
                             src="../../../Data/content2.jpg" alt="Ooops"/>
                        <img onClick={popup(true)} className={`${styles.img_zoomable} ${styles.left_img}`}
                             src="../../../Data/content3.jpg" alt="Ooops"/>
                    </div>
                    <div onClick={popup(false)} id="popup" className={styles.popup}>
                        <div onClick={popup(false)} id="popup_img" className={styles.popup_img}></div>
                    </div>
                </div>

                Наши каркасные дома являются самыми долговечными и экологически чистыми постройками, что делает их
                привлекательными для тех, кто ценит комфорт и заботится о здоровье своей семьи. Компания-застройщик
                каркасных домов предлагает широкий спектр моделей и планировок, которые позволяют удовлетворить
                индивидуальные потребности и предпочтения каждого клиента.<br/>
                <br/>
                Компания гарантирует своим клиентам высокое качество и надежность построенных домов, а также
                профессионализм и индивидуальный подход в работе с заказчиками. Опытные специалисты контролируют каждый
                этап строительства, что гарантирует его правильность и своевременность. Компания также предлагает гибкую
                систему скидок и индивидуальный подход к каждому клиенту, что делает сотрудничество с ней максимально
                выгодным и приятным.<br/>
            </div>
        </div>
    );
};

function popup(popswitch) {
    let popup = document.getElementById("popup");
    let img = document.getElementById("popup_img");
    if (popswitch === true) {
        img.style.setProperty("background-image", `url(${this.src})`);
        popup.classList.add("pop_visible");
    } else if (popswitch === false) {
        popup.classList.remove("pop_visible")
    }
}


export default Home;