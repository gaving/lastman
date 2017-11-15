import React, { Component } from 'react';
import footballDataApi from '../Services/api/footbal-data/';

class Gameweek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchday: null,
      deadline: '',
      end: ''
    };
  }

  async componentDidMount() {
    try {
      const gameweekData = await footballDataApi.competitions.getOne(445);

      this.setState({
        matchday: gameweekData.currentMatchday
      });

      const fixtureData = await footballDataApi.fixtures.getGameweek(445, gameweekData.currentMatchday);

      const dates = fixtureData.fixtures.map(f => f.date);
      const deadline = dates.reduce((a, b) => (a < b ? a : b));
      const end = dates.reduce((a, b) => (a > b ? a : b));

      this.setState({
        deadline: new Date(deadline),
        end: new Date(end)
      });
    }
    catch (err) {
      //console.log(err);
    }
  }

  render() {
    return (
      <div>Current Matchday: {this.state.matchday}<br />
      Deadline: {new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(this.state.deadline)}<br />
      GameWeek Over: {new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(this.state.end)}
      </div>
    );
  }
}

export default Gameweek;
