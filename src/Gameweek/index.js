import React, { Component } from 'react';
import * as api from '../Services/api/footbal-data/';

class Gameweek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameweek: null,
    };
  }

  async componentDidMount() {
    const d = await api.getOne(445);
    console.log(d);

    this.setState({
      gameweek: d,
    });
  }

  render() {
    const { gameweek } = this.state;
    return <div>{gameweek}</div>;
  }
}

export default Gameweek;
