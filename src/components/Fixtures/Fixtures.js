import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CircularProgress } from "material-ui/Progress";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import * as fixtureActions from "../../actions/fixtureActions";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class Fixtures extends Component {
  componentWillMount() {
    const { id = 1 } = this.props.match.params;
    this.props.actions.loadFixtures(id);
  }
  render() {
    const { fixtures = [], loading, classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          {loading && <CircularProgress />}
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Home</TableCell>
                <TableCell>Away</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fixtures.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.date}</TableCell>
                    <TableCell>{n.homeTeamName}</TableCell>
                    <TableCell>{n.awayTeamName}</TableCell>
                    <TableCell>{n.status}</TableCell>
                    <TableCell>{`${n.result.goalsHomeTeam} - ${
                      n.result.goalsAwayTeam
                    }`}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    state => {
      return {
        fixtures: state.football.fixtures,
        loading: state.football.loading
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators(fixtureActions, dispatch)
      };
    }
  )(Fixtures)
);
