import React, {useState} from 'react';
import styles from './AuthForm.module.scss'
import logo from "../../../Data/logo.jpg";
import {Navigate} from "react-router-dom";
import axios from "axios";

const AuthForm = () => {

  const baseURL = process.env.REACT_APP_API_DOMAIN_BASE;
  console.log(process.env.REACT_APP_API_DOMAIN_BASE)
  const [request, setRequest] = useState()

  const logReq = () => {
    let login = document.getElementById("log").value;
    let pass = document.getElementById("pas").value;
    axios.post(baseURL + 'products/auth', {
      login: login,
      password: pass,
    }).then(response => {
      if (response.status === 200) {
        setRequest(response.status);
        console.log(response.data)
      }
    }).catch(error => {
        if (error.status === 401)
          alert("Указан неверный пароль")
        else
          alert("Что то не так пошло")
      }
    );
  }
  if (request === 200) {
    return <Navigate to={`/new/`}/>;
  }

  return (
    <>
      <div className={styles.logo_wrapper}>
        <img src={logo} alt="Missing Logo" className={styles.logo_img}/>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.title}>Авторизация менеджера</div>
        <div className={styles.input_wrapper}>
          <div className={styles.text}>Логин</div>
          <input id="log" className={styles.auth_input}></input>
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.text}>Пароль</div>
          <input id="pas" className={styles.auth_input}></input>
        </div>
        <div className={styles.button} onClick={logReq}>Войти</div>
      </div>
    </>
  );
};

//function login(e) {
//  let login = document.getElementById("log").value;
//  let pass = document.getElementById("pas").value;
//  if (pass === 'admin' && login === 'admin') {
//    localStorage.setItem('User',
//      JSON.stringify({
//        name: login,
//        date: new Date
//      }));
//  } else {
//    e.preventDefault();
//    alert('Неверный логин или пароль!');
//  }
//}

export default AuthForm;