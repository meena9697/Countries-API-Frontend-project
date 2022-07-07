import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCountryData } from "../redux/action/countryAction";
import { AppState } from "../types";
import CountryComp from "./CountryComp";
import { Country } from "../types";

export default function CountryPage() {
  const { country_name } = useParams();

  const dispatch = useDispatch<any>();

  const countryNameData = useSelector(
    (appState: AppState) => appState.countryitemData.countryitemData
  );
  const error = useSelector(
    (appState: AppState) => appState.countryitemData.error
  );
  const loading = useSelector(
    (appState: AppState) => appState.countryitemData.loading
  );

  useEffect(() => {
    if (country_name) {
      dispatch(fetchCountryData(country_name));
    }
  }, [dispatch, country_name]);

  if (error) return <div>There is an error</div>;
  if (loading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  return (
    <div>
      {countryNameData &&
        countryNameData
          .filter((data) => data.name.common.toLowerCase())
          .map((seleted_country: Country) => {
            return (
              <>
                <CountryComp seleted_country={seleted_country} />
              </>
            );
          })}
    </div>
  );
}
