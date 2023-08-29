import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [btnText, setBtnText] = useState("Submit");
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formState);
      const result = await emailjs.sendForm(
        "service_jodo737",
        "template_a2pfvvl",
        form.current,
        "YtZS6VBZXYS4mZd16"
      );
      console.log(result.text);
      setBtnText("Message Sent!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error.text);
      setBtnText("Error!");
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
            <input
              type="name"
              name="name"
              className="form-control"
              placeholder="John Hancock"
              defaultValue={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="johnhancock@email.com"
              defaultValue={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Leave a Message
          </label>
            <textarea
              type="message"
              name="message"
              className="form-control"
              placeholder="John Hancock"
              defaultValue={formState.name}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
      <button type="submit" className="btn btn-warning">
        {btnText}
      </button>
    </form>
  );
};

export default Contact;
