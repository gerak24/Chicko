import React from 'react';
import styles from './Home.module.scss'
import ImageStand from "./ImageStand/ImageStand";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.title}> Главная</div>
            <div className={styles.description}>
                Всё о CHICKO ❤️‍🔥<br/>
                CHICKO — это место, где собрано всё самое яркое и популярное, что связано с корейской культурой и
                едой<br/>
                Сейчас 44 домика по всей России и за её пределами. Мы растём и ещё появляются точки в разных городах
                России.<br/>
                Историю его создания я уже рассказывал в фильме, но сейчас хочу закрепить всё в одном месте. О
                трудностях, горящих глазах и любовью к чикену — читайте ниже.<br/>
                <ImageStand/>
            </div>
        </div>
    );
};

export default Home;