
import React, { useEffect, useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import styles from './CityDropdown.module.css'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { useQuery } from 'react-query';
import axios from 'axios';

const city = [ {
    "id": "1",
    "label": "Mumbai",
    "state": "Maharashtra"
},
{
    "id": "2",
    "label": "Delhi",
    "state": "Delhi"
},
{
    "id": "3",
    "label": "Bengaluru",
    "state": "Karnataka"
},
{
    "id": "4",
    "label": "Ahmedabad",
    "state": "Gujarat"
},
{
    "id": "5",
    "label": "Hyderabad",
    "state": "Telangana"
},
{
    "id": "6",
    "label": "Chennai",
    "state": "Tamil Nadu"
},
{
    "id": "7",
    "label": "Kolkata",
    "state": "West Bengal"
},
{
    "id": "8",
    "label": "Pune",
    "state": "Maharashtra"
},
{
    "id": "9",
    "label": "Jaipur",
    "state": "Rajasthan"
},
{
    "id": "10",
    "label": "Surat",
    "state": "Gujarat"
},
{
    "id": "11",
    "label": "Lucknow",
    "state": "Uttar Pradesh"
},
{
    "id": "12",
    "label": "Kanpur",
    "state": "Uttar Pradesh"
},
{
    "id": "13",
    "label": "Nagpur",
    "state": "Maharashtra"
},
{
    "id": "14",
    "label": "Patna",
    "state": "Bihar"
},
{
    "id": "15",
    "label": "Indore",
    "state": "Madhya Pradesh"
},
{
    "id": "16",
    "label": "Thane",
    "state": "Maharashtra"
},
{
    "id": "17",
    "label": "Bhopal",
    "state": "Madhya Pradesh"
},
{
    "id": "18",
    "label": "Visakhapatnam",
    "state": "Andhra Pradesh"
},
{
    "id": "19",
    "label": "Vadodara",
    "state": "Gujarat"
},
{
    "id": "20",
    "label": "Firozabad",
    "state": "Uttar Pradesh"
},
{
    "id": "21",
    "label": "Ludhiana",
    "state": "Punjab"
},
{
    "id": "22",
    "label": "Rajkot",
    "state": "Gujarat"
},
{
    "id": "23",
    "label": "Agra",
    "state": "Uttar Pradesh"
},
{
    "id": "24",
    "label": "Siliguri",
    "state": "West Bengal"
},
{
    "id": "25",
    "label": "Nashik",
    "state": "Maharashtra"
},
{
    "id": "26",
    "label": "Faridabad",
    "state": "Haryana"
},
{
    "id": "27",
    "label": "Patiala",
    "state": "Punjab"
},
{
    "id": "28",
    "label": "Meerut",
    "state": "Uttar Pradesh"
},
{
    "id": "29",
    "label": "Kalyan-Dombivali",
    "state": "Maharashtra"
},
{
    "id": "30",
    "label": "Vasai-Virar",
    "state": "Maharashtra"
},
{
    "id": "31",
    "label": "Varanasi",
    "state": "Uttar Pradesh"
},
{
    "id": "32",
    "label": "Srinagar",
    "state": "Jammu and Kashmir"
},
{
    "id": "33",
    "label": "Dhanbad",
    "state": "Jharkhand"
},
{
    "id": "34",
    "label": "Jodhpur",
    "state": "Rajasthan"
},
{
    "id": "35",
    "label": "Amritsar",
    "state": "Punjab"
},
{
    "id": "36",
    "label": "Raipur",
    "state": "Chhattisgarh"
},
{
    "id": "37",
    "label": "Allahabad",
    "state": "Uttar Pradesh"
},
{
    "id": "38",
    "label": "Coimbatore",
    "state": "Tamil Nadu"
},
{
    "id": "39",
    "label": "Jabalpur",
    "state": "Madhya Pradesh"
},
{
    "id": "40",
    "label": "Gwalior",
    "state": "Madhya Pradesh"
},
{
    "id": "41",
    "label": "Vijayawada",
    "state": "Andhra Pradesh"
},
{
    "id": "42",
    "label": "Madurai",
    "state": "Tamil Nadu"
},
{
    "id": "43",
    "label": "Guwahati",
    "state": "Assam"
},
{
    "id": "44",
    "label": "Chandigarh",
    "state": "Chandigarh"
},
{
    "id": "45",
    "label": "Hubli-Dharwad",
    "state": "Karnataka"
},
{
    "id": "46",
    "label": "Amroha",
    "state": "Uttar Pradesh"
},
{
    "id": "47",
    "label": "Moradabad",
    "state": "Uttar Pradesh"
},
{
    "id": "48",
    "label": "Gurgaon",
    "state": "Haryana"
},
{
    "id": "49",
    "label": "Aligarh",
    "state": "Uttar Pradesh"
},
{
    "id": "50",
    "label": "Solapur",
    "state": "Maharashtra"
},
{
    "id": "51",
    "label": "Ranchi",
    "state": "Jharkhand"
}];

const CityDropdown = ({setCitySelected}) => {


    const onChangefetchByCity = (data) => {
        setCitySelected(data)
    };
 
    return (
        <div className={styles.cityList}>
            <p>Select City</p>
            <Typeahead
                onChange={(selected) =>onChangefetchByCity(selected[0]?.label)}
                options={city}
            />
      </div>
    );
};

export default CityDropdown;