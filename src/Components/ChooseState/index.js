import React, { useEffect } from "react";
import cities from "../../Data/turkeyCities.json";
import { UseWeatherAppContext } from "../../Context/Context";
import axios from "axios";

function ChooseStateComponent() {
  const {
    state: { city },
    dispatch,
  } = UseWeatherAppContext();

  const handleChange = (e) => {
    const selectedCity = cities.filter((city) => {
      return city.name === e.target.value;
    })[0];

    dispatch({
      type: "SET_CITY",
      payload: { ...selectedCity },
    });
  };

  // api call

  const APIKEY = "34480b98aa332da53123a0ac63a4ea9d";
  let lat = city && city.latitude ? city.latitude : "";
  let long = city && city.longitude ? city.longitude : "";
  let exclude = "hourly,minutely";
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;

  const fetchData = () => {
    axios(URL).then((data) => {
      let _daily = data.data.daily;
      dispatch({
        type: "SET_DAILY",
        payload: _daily,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <div className="stateWrap">
        <select
          className="stateMenu"
          defaultValue={city}
          onChange={handleChange}
        >
          {cities &&
            cities.length > 0 &&
            cities.map((city) => {
              return (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
}

export default ChooseStateComponent;
