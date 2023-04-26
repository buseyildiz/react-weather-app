import React from "react";
import ChooseStateComponent from "./ChooseState";
import WeekInfoCardComponents from "./WeekInfoCard";
import HumidityComponents from "./HUMIDITY";
import LeftComponents from "./Left";

function HomeComponents() {
  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
          <LeftComponents />
          <div className="rightSide">
            <ChooseStateComponent />
            <WeekInfoCardComponents /> 
            <HumidityComponents />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponents;
