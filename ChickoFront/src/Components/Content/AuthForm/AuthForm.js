import React from 'react';
import styles from './AuthForm.module.scss'
import logo from "../../../Data/logo.jpg";
import {NavLink} from "react-router-dom";

const AuthForm = () => {
    return (
        <>
            <div className={styles.logo_wrapper}>
                <img src={logo} alt="Missing Logo" className={styles.logo_img}/>
            </div>
            <div className={styles.form_wrapper}>
                <div className={styles.title}>Авторизация менеджера</div>
                <div className={styles.input_wrapper}>
                    <div className={styles.text}>Логин</div>
                    <input id="log"  className={styles.auth_input}></input>
                </div>
                <div className={styles.input_wrapper}>
                    <div className={styles.text}>Пароль</div>
                    <input id="pas" className={styles.auth_input}></input>
                </div>
                <NavLink to={'/auth/nomenc'} className={styles.button} onClick={login}>Войти</NavLink>
            </div>
        </>
    );
};

function login(e) {
    let login = document.getElementById("log").value;
    let pass = document.getElementById("pas").value;
    if (pass === 'admin' && login === 'admin') {
        localStorage.setItem('User',
            JSON.stringify({
                name: login,
                date: new Date
            }));
    } else {
        e.preventDefault();
        alert('Неверный логин или пароль!');
    }
}
export default AuthForm;