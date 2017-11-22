import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import { GridList, GridListTile, GridListTileBar } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import InfoIcon from "material-ui-icons/Info";
import TouchAppIcon from "material-ui-icons/TouchApp";
import SettingsIcon from "material-ui-icons/Settings";
import ScheduleIcon from "material-ui-icons/Schedule";

const styles = theme => ({
  container: {
    flexGrow: 1
  },
  gridList: {
    paddingTop: 40,
    justifyContent: "space-between"
  },
  gridTile: {
    padding: 20,
    height: 200,
    width: "100%"
  },
  icon: {
    width: 128,
    height: 128
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    const tileData = [
      {
        img: <ScheduleIcon />,
        path: "fixtures",
        title: "Fixtures"
      },
      {
        img: <TouchAppIcon />,
        path: "select",
        title: "Select"
      },
      {
        img: <InfoIcon />,
        path: "results",
        title: "View Results"
      },
      {
        img: <SettingsIcon />,
        path: "settings",
        title: "Settings"
      }
    ];

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={40}>
            <GridList className={classes.gridList}>
              {tileData.map(tile => (
                <Grid item key={tile.path}>
                  <Link to={`/${tile.path}`} key={tile.path}>
                    <GridListTile key={tile.path} className={classes.gridTile}>
                      {React.cloneElement(tile.img, {
                        className: classes.icon
                      })}
                      <GridListTileBar
                        title={tile.title}
                        actionIcon={
                          <IconButton>
                            <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  </Link>
                </Grid>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
