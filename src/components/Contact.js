import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/contact.scss";
import emailjs from "emailjs-com";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
    const initialValues = { username: "", email: "", textArea: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        emailjs
            .sendForm(
                "service_iyn84il",
                "template_y8a0rcv",
                formRef.current,
                "user_lefzq7fmaxW193Khswg2c"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "To pole jest wymagane";
        }
        if (!values.email) {
            errors.email = "To pole jest wymagane!";
        } else if (!regex.test(values.email)) {
            errors.email = "To nie jest format email!";
        }
        if (!values.textArea) {
            errors.textArea = "To pole jest wymagane";
        } else if (values.textArea.length < 4) {
            errors.textArea = "Wiadomość musi zawierać więcej niż 4 znaki";
        }
        return errors;
    };
    const handleReset = () => {
        formValues.username = " ";
        formValues.email = " ";
        formValues.textArea = " ";
    };
    return (
        <section className="contact">
            <div className="contact__black"></div>

            <div className="contact__left">
                <div className="contact__email">
                    <h1 className="contact__h">Zapraszam do kontaktu</h1>
                    <i className="contact__icon">
                        <MdAlternateEmail />
                    </i>
                    <a
                        href="mailto:kamilpakula.frontdev@gmail.com"
                        className="contact__link"
                    >
                        kamilpakula.frontdev@gmail.com
                    </a>
                </div>
            </div>
            <div className="contact__right">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    (handleReset(),
                    (<p className="contact__p1">Dziękuję za wiadomość!</p>))
                ) : (
                    <p className="contact__p1">Wypełnij formularz</p>
                )}
                <form
                    action=""
                    className="contact__form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Imię"
                        className="contact__input"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                    <p className="contact__p">{formErrors.username}</p>
                    <input
                        type="email"
                        placeholder="Adres e-mail"
                        className="contact__input"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p className="contact__p">{formErrors.email}</p>
                    <textarea
                        type="text"
                        placeholder="Wiadomość"
                        rows="5"
                        className="contact__area"
                        name="textArea"
                        value={formValues.textArea}
                        onChange={handleChange}
                    />
                    <p className="contact__p">{formErrors.textArea}</p>
                    <button className="contact__btn "> Wyślij</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
