import React from "react";

const ContactUs = () => {
  return (
    <div className="zigbee">
      <div className="containerz">
        <h2>Contact Us </h2>
        <form method="POST" action="https://formspree.io/f/xvgppaow">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
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
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
