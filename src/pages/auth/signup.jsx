import React, { useState } from "react";
import art from "../../assists/Art.svg"
import styles from "./signup.module.css"
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";



const Signup = () => {

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
            <h1>Register</h1>



            <div className={styles.inputBox}>
                <span ><FaUser /></span>
                 <input type="text" placeholder="Name" />
            </div>

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


             <div className={styles.passwordBox}>
                 <span className={styles.icon}><FaLock /></span>
               <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password" />

          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
            </div>


           
            <button>Sign Up</button>
            <h4>Have an account?</h4>
            <button className={styles.btn2}>Log In</button>
        </div>

    </div>
  )
}

export default Signup