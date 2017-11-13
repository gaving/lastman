import React, { Component } from 'react';
import footballDataApi from '../Services/api/footbal-data/';

class Gameweek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMatchday: null
    };
  }

  async componentDidMount() {
    let data;
    try {
      data = await footballDataApi.getOne(445);
    }
    catch (err) {
      // Handle Error
    }

    this.setState({
      currentMatchday: data.currentMatchday
    });
  }

  render() {
    return (<div>Current Matchday: {this.state.currentMatchday}</div>);
  }
}

export default Gameweek;
