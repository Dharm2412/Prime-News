import React from "react";

const ContactUs = () => {
  return (
    <div className="zigbee">
      <div className="containerz">
        <h2>Contact Us </h2>
        <form action="https://fabform.io/f/{insert-form-id-here}" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
          <p className="my-4">
            If you prefer to contact us by email.{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://veilmail.io/e/FkKh7o"
            >
              https://veilmail.io/e/FkKh7o
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
