import React from 'react';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper nowplaying">
          <div class="item-panel">Game: Overwatch, Super Smash Bros Melee, Dota 2 </div>
          <div class="item-panel">Music: The Internet, Marian Hill, J. Cole</div>
          <div class="item-panel">Reading: Y: The Last Man, Programming Javascript Applications</div>
          <div class="item-panel">Watching: Game of Thrones, Silicon Valley</div>
        </section>
    );
  }
}
