import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { data } = props;
  const { confirmed, deaths, recovered, lastUpdate } = data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h6">
              <CountUp start={0} end={confirmed} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">
              No. of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h6">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">
              No. of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h6">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">
              No. of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
