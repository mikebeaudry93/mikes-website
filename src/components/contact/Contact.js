import React from "react";
import "./contact.scss";
import { BsChatDots } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {}, []);

  function submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: formValues,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });
  }

  function resetForm() {
    setFormValues({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        Interested in working together? Let's chat!
        <span>
          <BsChatDots className="icon" size="1.2rem" />
        </span>
      </p>
      <form>
        <label htmlFor="name">name</label>
        <input
          type="text"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          cols="30"
          rows="6"
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
        ></textarea>
        <button
          className="btn-primary btn-form"
          type="submit"
          onClick={submitEmail}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
