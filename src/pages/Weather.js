import React, { useState } from "react";
import { Row } from "antd";
import CityDropdown from "../components/dropdownMenu/DropdownMenu";
import DetailWeatherCard from "../components/weatherCard/DetailWeatherCard";

const Weather = () => {
  const [citySelected, setCitySelected] = useState("");

  return (
    <>
      <Row style={{display: 'flex', justifyContent: 'space-around'}}>
          <CityDropdown setCitySelected={setCitySelected} />
      </Row>
      <Row>
          <DetailWeatherCard citySelected={citySelected} />
      </Row>
    </>
  );
};

export default Weather;
