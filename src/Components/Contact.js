/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", subject: "", email: "" };
  }
  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  subjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "basic";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              onSubmit={this.handleSubmit}
              id="contactForm"
              name="contactForm"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.nameChange}
                    pattern="[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={this.emailChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.subjectChange}
                    placeholder="Enter the subject"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.messageChange}
                    placeholder="Any suggestions and inputs are welcome!"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    <span></span>
                  </label>
                  <input
                    size="25"
                    type="submit"
                    value="Submit"
                    className="button"
                    style={{ width: "200px" }}
                  />
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city} {state}, {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
