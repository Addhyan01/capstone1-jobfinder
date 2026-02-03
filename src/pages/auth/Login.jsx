import React, { useState } from 'react'
import art from "../../assists/Art.svg"
import styles from "./signup.module.css"
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {

        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
     <div className={styles.signup}>
        <div className={styles.art} >
            <img src={art} alt="art" />
            <h1>Welcome aboard my friend</h1>

            <h4>just a couple of clicks and we start</h4>
        </div>



        <div className={styles.form}>
            <h1>Login</h1>



      

            <div className={styles.inputBox}>
                <span><FaEnvelope /></span>
                 <input type="email" placeholder="Email" /> 
            </div>
           
           





            <div className={styles.passwordBox}>
                <span className={styles.icon}><FaLock /></span>
               <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
            </div>


            


           
            <button>Login</button>
            <h4 >Have no account yet?
</h4>
            <button className={styles.btn2}>SignUp</button>
        </div>

    </div>
  )
}

export default Login