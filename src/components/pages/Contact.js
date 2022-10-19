import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const styles = {
  formStyle: {
    backgroundColor: "white",
    maxWidth: "500px",
    color: "black",
    display: "flex",
    flexDirection: "column",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "5px",
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8szaoh",
        "template_10xvf0i",
        form.current,
        "Txo8nMBF9Z5sccG2Z"
      )
      .then(
        (result) => {
          alert(
            "You have successfully sent an email to the magnificent Kate Ortiz!"
          );
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div>
      <br></br>
      <h1>Contact Kate Ortiz</h1>
      <form style={styles.formStyle} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <br></br>
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
