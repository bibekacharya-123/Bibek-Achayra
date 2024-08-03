import React from "react";
import styles from "./contactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="SectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
        <label htmlFor="email" hidden>
          Email
        </label>
        <input
          type="text"
          name="Email"
          id="Emain"
          placeholder="Email"
          required
        />
      </div>
      <div className="formGroup">
      <label htmlFor="message" hidden>
        message
      </label>
      <textarea    type="text"
      name="Mssgae"
      id="message"
      
      required></textarea>
      
       
    </div>
    <input  className="hover-btn" type="submit" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact;
