import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CityDropdown from '../components/CityDropdown';
import { Row, Col } from 'antd';


const Weather = () => {
    const [citySelected, setCitySelected] = useState('ramgarh');

    
    const getTemp = () => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citySelected},IN&APPID=e4932d81a90afc2b03fd16e28afef211`)
    };

    const {isLoading, data, refetch} = useQuery('Temprature', getTemp);


    useEffect(()=>{
        if(!citySelected) return;
        refetch()
        console.log('asdxfghjksedrctvhbjnksexdrcvbhjn k');

    })

    const kelvinToDegreeCelcius = (data?.data.main.temp - 273.15).toFixed(2);

    if(isLoading) return<p>Loading...</p>;

    return (
        <>
        <Row>
            <h2>Weather</h2>
        </Row>
        <Row span={24}>

            <Col span={10}>
                <CityDropdown setCitySelected={setCitySelected}/>
            </Col>
            <Col span={12}>
                <p>city : {data?.data.name}</p>
                <p>Temperature: {kelvinToDegreeCelcius}°C</p>
                <p>wind Speed : {data?.data.wind.speed} km/hr</p>
                <p>Description: {data?.data.weather[0].description}</p>
            </Col>
        </Row>
        </>
    );
};

export default Weather;