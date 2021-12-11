import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

export default function CountryPicker(props) {
  const { country, updateCountry } = props;

  const [countries, updateCountries] = useState([]);

  useEffect(() => {
    const getCounties = async () => {
      updateCountries(await fetchCountries());
    };
    getCounties();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        value={country}
        onChange={(ev) => {
          updateCountry(ev.target.value);
        }}
      >
        <option value="global">Global</option>
        {countries.map((country, i) => (
          <option key={`country_${i}`} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
