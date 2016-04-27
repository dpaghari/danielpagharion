import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper container">
          <h1>Contact</h1>
          <form>
            <label for="name">Name:</label>
            <input type="text" name="name"></input><br/>
            <label for="email">Email:</label>
            <input type="text"></input><br/>
            <label for="message">Message:</label>
            <textarea></textarea><br/>
            <input type="submit"></input>
          </form>
        </section>
    );
  }
}
