import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper contact">
          <h1>Get in Touch!</h1>
          <div class="form-card">
          <form>
            <fieldset class="senderinfo">
            <label for="name">Name:</label>
            <input type="text" name="name"></input>
            <label for="email">Email:</label>
            <input type="text" placeholder="newguy@example.com"></input>
            </fieldset>
            <fieldset class="sendermessage">
            <label for="message">Message:</label>
            <textarea></textarea><br/>
            </fieldset>
            <a href="#" id="submit" class="contact-cta">Send<i class="fa fa-envelope-o fa-fw"></i></a>
          </form>
          </div>
        </section>
    );
  }
}
