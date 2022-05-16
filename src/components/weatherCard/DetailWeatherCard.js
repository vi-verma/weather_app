import React, { useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

 const DetailWeatherCard = ({citySelected}) => {
   let dt =  new Date(2018, 11, 24).toDateString();
   
   useEffect(()=>{
     if(citySelected){
       refetch();
     }
     console.log("citySelectedcitySelectedcitySelected",citySelected);
      return()=>{
        console.log("unmount");
      }
   },[citySelected])

    const getWeatherData = (citySelected) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citySelected},IN&APPID=e4932d81a90afc2b03fd16e28afef211`)
    };
    const {isLoading, data, isError, error, refetch} = useQuery('Temprature', ()=>getWeatherData(citySelected), {
        // staleTime: 0,
        //  refetchOnMount: "always",
        //  cacheTime:0,
        // retryOnMount:true,

    });

    const kelvinToDegreeCelcius = (data?.data.main?.temp - 273.15).toFixed(2);

    if (isLoading)return <p>Loading....</p>;
    if (isError) return <p>{error.message}</p>;
  return (
    <Card>
      <p>city : {data.data?.name}</p>
      <p>Temperature: {kelvinToDegreeCelcius}°C</p>
      <p>wind Speed : {data?.data.wind?.speed} km/hr</p>
      <p>Description: {data?.data.weather[0].description}</p>
      <p>{dt}</p>
    </Card>
  );
};
export default DetailWeatherCard;
