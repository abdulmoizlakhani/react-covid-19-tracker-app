import React from "react";
import { Grid } from "@material-ui/core";

import CardItem from "./CardItem";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { data } = props;

  if (!data) return "...loading";

  const { confirmed, deaths, recovered, lastUpdate = "N/A" } = data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <CardItem
          title="Infected"
          endCount={confirmed}
          lastUpdate={lastUpdate}
          className={[styles.infected]}
        />
        <CardItem
          title="Recovered"
          endCount={recovered}
          lastUpdate={lastUpdate}
          className={[styles.recovered]}
        />
        <CardItem
          title="Deaths"
          endCount={deaths}
          lastUpdate={lastUpdate}
          className={[styles.deaths]}
        />
      </Grid>
    </div>
  );
}
