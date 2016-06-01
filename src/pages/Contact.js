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
          <form action="https://formspree.io/dspagharion@gmail.com" method="POST">
            <fieldset class="senderinfo">
            <label for="name">Name:</label>
            <input type="text" name="name"></input>
            <label for="email">Email:</label>
            <input type="text" name="email" placeholder="your@email.com"></input>
            </fieldset>
            <fieldset class="sendermessage">
            <label for="message">Message:</label>
            <textarea name="message" placeholder="Dan I realized something...you're really cool"></textarea><br/>
            </fieldset>
            <button type="submit" class="contact-cta" id="submit">Send<i class="fa fa-send fa-lg fa-fw"></i></button>
          </form>
          </div>
        </section>
    );
  }
}
