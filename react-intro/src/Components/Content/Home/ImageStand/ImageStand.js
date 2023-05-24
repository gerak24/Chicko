import React, { useState } from 'react';
import styles from "./ImageStand.module.scss";
import content1 from "../../../../Data/content1.jpg";
import content2 from "../../../../Data/content2.jpg";
import content3 from "../../../../Data/content3.jpg";

const ImageStand = ({src}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.image_container}>
            <div className={styles.img_column}>
                <img className={`${styles.img_zoomable} ${styles.left_img}`}
                     src={content1} alt="Ooops"/>
            </div>
            <div className={styles.img_column}>
                <img className={`${styles.img_zoomable} ${styles.right_img}`}
                     src={content2} alt="Ooops"/>
                <img className={`${styles.img_zoomable} ${styles.right_img}`}
                     src={content3} alt="Ooops"/>
            </div>
            <div id="popup" className={styles.popup}>
                <div id="popup_img" className={styles.popup_img}></div>
            </div>
        </div>

    );
};


/*function popup(popswitch) {
    let popup = document.getElementById("popup");
    let img = document.getElementById("popup_img");
    if (popswitch === true) {
        img.style.setProperty("background-image", `url(${src})`);
        popup.classList.add("pop_visible");
    } else if (popswitch === false) {
        popup.classList.remove("pop_visible")
    }
}*/
export default ImageStand;