import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

export default function CardItem(props) {
  const { title, endCount, lastUpdate, className } = props;

  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, ...className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6">
          <CountUp start={0} end={endCount} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{lastUpdate}</Typography>
        <Typography variant="body2">No. of active cases of COVID-19</Typography>
      </CardContent>
    </Grid>
  );
}
