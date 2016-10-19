import React from 'react';
import Blurb from '../components/Blurb';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper nowplaying">
          <Blurb category="book" imgURL="https://images-na.ssl-images-amazon.com/images/I/51esV2pnMUL._SX331_BO1,204,203,200_.jpg" headline="Y: The Last Man"/>
          <Blurb category="book" imgURL="https://images-na.ssl-images-amazon.com/images/I/513qta1gFCL._SY344_BO1,204,203,200_.jpg" headline="Saga"/>
          <Blurb category="book" imgURL="https://images-na.ssl-images-amazon.com/images/I/417eQ5d7FiL._SY344_BO1,204,203,200_.jpg" headline="The Design of Everyday Things"/>
          <Blurb category="tv" imgURL="https://lh4.ggpht.com/-NFbWNHULGvQ/V6X1Ghjm8hI/AAAAAACDSYc/67l6jofpnnM/w1000-h800/socialfeed-you-ready-thegetdown.jpg" headline="The Get Down"/>
          <Blurb category="tv" imgURL="http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_progressive,pg_1,q_auto/atlanta_qa4drh.jpg" headline="Atlanta"/>
          <Blurb category="tv" imgURL="https://art-s.nflximg.net/081a7/4118bc185081d7b9ff5160dc6e5304cbaab081a7.jpg" headline="Stranger Things"/>
          <Blurb category="music" imgURL="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" headline="Blonde"/>
          <Blurb category="music" imgURL="http://is4.mzstatic.com/image/pf/us/r30/Music1/v4/ce/4f/1f/ce4f1f95-9cd9-5518-08f4-4d3bc23c0fd8/UMG_cvrart_00602547247940_01_RGB72_1500x1500_15UMGIM06288.1500x1500-75.jpg" headline="Marian Hill"/>
          <Blurb category="music" imgURL="http://pitchfork-cdn.s3.amazonaws.com/content/999.jpg" headline="Kaytranada"/>
          <Blurb category="music" imgURL="https://images.genius.com/5b532e5fd95cb6cdd99b8bf7e55c8adb.810x529x1.jpg" headline="The Internet"/>
          <Blurb category="game" imgURL="http://cdn.wccftech.com/wp-content/uploads/2015/10/overwatch.-logo.jpg" headline="Overwatch"/>
        </section>
    );
  }
}
