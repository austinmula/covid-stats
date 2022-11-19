import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "date-fns";

export const AppContext = createContext({
  countries: [],
  todayData: [],
  county: [],
  overallStats: [],
  getOverallStats: () => {},
  getCountryStats: () => {},
  getTodaysData: () => {},
});

const AppContextProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [overallStats, setOverallStats] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //   const [message, setMessage] = useState("");

  let options = {
    method: "GET",
    url: "",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
    },
  };

  //   Get all Countries
  const getCountries = async () => {
    options = { ...options, url: "https://covid-193.p.rapidapi.com/countries" };
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setCountries(response.data.response);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getTodaysData = async (data) => {
    options = {
      ...options,
      url: "https://covid-193.p.rapidapi.com/history",
      params: data,
    };
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      response.data.response.forEach((element) => {
        // console.log(format(new Date(element.day), "y"));
        element.time = format(new Date(element.time), "HH:mm");
        element.cases.new = parseInt(element.cases.new);
        element.deaths.new = parseInt(element.deaths.new);
      });

      console.log(response.data.response);
      setTodayData(
        response.data.response.sort((a, b) =>
          new Date(a.day) !== new Date(b.day)
            ? new Date(a.day) < new Date(b.day)
              ? -1
              : 1
            : 0
        )
      );

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Get Historical Data of a given country
  const getCountryStats = async (data) => {
    options = {
      ...options,
      url: "https://covid-193.p.rapidapi.com/history",
      params: { country: data.country },
    };

    // console.log(options);
    try {
      setIsLoading(true);
      const response = await axios.request(options);

      response.data.response.forEach((element) => {
        element.cases.new = parseInt(element.cases.new);
        element.deaths.new = parseInt(element.deaths.new);
      });

      setCountry(
        response.data.response
          .filter((item) => format(new Date(item.day), "y") == "2022")
          .sort((a, b) =>
            new Date(a.day) !== new Date(b.day)
              ? new Date(a.day) < new Date(b.day)
                ? -1
                : 1
              : 0
          )
          .slice(
            response.data.response.length - 230,
            response.data.response.length
          )
      );

      setCountry(
        response.data.response.filter(
          (item) => format(new Date(item.day), "y") == "2022"
        )
      );
      // setCountry(newArr);
      // console.log(country);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  //   Get Overall Stats
  const getOverallStats = async () => {
    options = {
      ...options,
      url: "https://covid-193.p.rapidapi.com/statistics",
    };
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setOverallStats(response.data.response);
      console.log(response.data.response);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isError,
    isLoading,
    isSuccess,
    getOverallStats,
    getCountries,
    setIsError,
    setIsSuccess,
    setIsLoading,
    countries,
    country,
    getCountryStats,
    overallStats,
    getTodaysData,
    todayData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.any,
};

export default AppContextProvider;
