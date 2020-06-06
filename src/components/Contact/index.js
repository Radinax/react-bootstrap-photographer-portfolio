import React, { useState } from "react";
import { contactText } from "../../utils/text";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { title } = contactText;

  const contactTitle = <h3 className="display-4 mb-5">{title}</h3>;

  const form = (
    <form action="" className="contact-form">
      <div className="form-group py-4">
        <input
          type="text"
          className="form-control my-2 p-2 input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="name" className="label">
          Name
        </label>
      </div>
      <div className="form-group py-4">
        <input
          type="email"
          className="form-control my-2 p-2 input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="email" className="label">
          Email Address
        </label>
      </div>
      <div className="form-group py-4 my-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label for="check" className="ml-2">
          Send Announcements
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-block p-2 font-weight-bold text-uppercase submit-button"
      >
        Subscribe
      </button>
    </form>
  );

  return (
    <section className="contact p-5" id="Contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 pb-4">
            {contactTitle}
            {form}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
