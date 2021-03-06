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
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {}, []);

  let isEmpty = !formValues.name || !formValues.email || !formValues.message;

  function submitEmail(e) {
    e.preventDefault();
    if (isEmpty === true) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      setStatus("");
    } else {
      setIsLoading(true);
      setError(false);
      axios({
        method: "POST",
        url: "/send",
        data: formValues,
      }).then((response) => {
        setIsLoading(false);
        if (response.data.status === "success") {
          setStatus("success");
          setTimeout(() => {
            setStatus("");
          }, 5000);
          resetForm();
        } else if (response.data.status === "fail") {
          setStatus("fail");
        }
      });
    }
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
          className="txt-area"
          name="message"
          cols="30"
          rows="27.5"
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
        ></textarea>
        {status === "success" && (
          <p className="error-success-msg required">Thanks for submitting!</p>
        )}
        {isLoading ? (
          <svg
            className="loading"
            viewBox="0 0 90 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="c"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              stroke="black"
              cx="45"
              cy="45"
              r="12"
            />
          </svg>
        ) : (
          <button
            className="btn-primary btn-form"
            type="submit"
            onClick={submitEmail}
          >
            Submit
          </button>
        )}
        {error && (
          <p className="error-success-msg required">
            Please fill out all required fields.
          </p>
        )}
        {status === "fail" && (
          <p className="error-success-msg required">
            Oops! There was an error.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
