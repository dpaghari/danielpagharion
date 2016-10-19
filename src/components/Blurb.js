import React from 'react';

export default class Blurb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
  }

  render() {
    var { category } = this.props;
    var catIcon;
    switch(category){
      case "book":
      catIcon = "fa fa-book";
      break;
      case "tv":
      catIcon = "fa fa-television";
      break;
      case "music":
      catIcon = "fa fa-music";
      break;
      case "game" :
      catIcon = "fa fa-gamepad";
      break;
    }

    // var iconHTML = `<i class=${catIcon} aria-hidden="true"></i>`;

    return (
      <section class="container blurb">
        <a onClick={this.handleClick} href="">
        <div class="blurb-head">
          <i class={catIcon} aria-hidden="true"></i>
          <h3>{this.props.headline}</h3>
        </div>
        <hr/>
        <div class="blurb-body">
          <img class="blurb-poster" src={this.props.imgURL}/>
        </div>
        </a>
      </section>
    );
  }

  handleClick(e) {
    e.preventDefault();
  }
}
