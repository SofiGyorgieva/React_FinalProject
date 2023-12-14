import React from "react";
import useForm from "../../hooks/useForm";

import styles from './Register.module.css';

const Register = () => {
    const initalState = {
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    };

    const {formData, changeHandler, resetForm} = useForm(initalState);

    const submitHandler = (e) => {
        e.preventDefault();
        ///TODO: Implement Register logic
        console.log('form submitted:', formData);
        resetForm();
    }

    const cancelHandler = () => {
        console.log('Registration canceled!');
        //TODO: Implement redirection to home page

        resetForm();
    } 

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.formGroup}>
                <label htmlFor="email" className="label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="username" className="label">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password" className="label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="repeatPassword" className="label">Repeat Password:</label>
                <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={changeHandler}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.button}>Register</button>
                <button type="button" className={styles.button} onClick={cancelHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Register;