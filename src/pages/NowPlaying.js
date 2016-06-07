import React from 'react';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper nowplaying">

          <div class="item-panel"><i class="fa fa-gamepad fa-lg"></i>Game: Overwatch, Super Smash Bros Melee, Uncharted 4</div>
          <div class="item-panel"><i class="fa fa-headphones fa-lg"></i>Music: The Internet, Marian Hill, J. Cole</div>
          <div class="item-panel"><i class="fa fa-book fa-lg"></i>Reading: Y: The Last Man, Programming Javascript Applications</div>
          <div class="item-panel"><i class="fa fa-television fa-lg"></i>Watching: Game of Thrones, Silicon Valley</div>
        </section>
    );
  }
}
