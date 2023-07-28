import React from "react";
import axios from 'axios';
import { useEffect } from 'react';

export default function Requests(){
  // fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response =>response.json())
  const options = {
    method: 'GET',
    url: 'https://menumy-menu-api3.p.rapidapi.com/search/store/v3',
    params: {
      latitude: '37.7786357',
      longitude: '-122.3918135',
      search_focus: 'store',
      maximum_miles: '3',
      user_state: 'CA',
      user_street_name: 'King Street',
      user_zipcode: '94107',
      sort: 'relevance',
      user_country: 'US',
      user_street_num: '188',
      store_type: 'restaurant',
      user_city: 'San Francisco',
      budget: '20'
    },
    headers: {
      'X-RapidAPI-Key': 'f3923651bcmsha1c4f38d3c7e587p10186ajsn5efb532fd6d1',
      'X-RapidAPI-Host': 'menumy-menu-api3.p.rapidapi.com'
    }
  };
  useEffect(() => {
    const fetchMenu = async () =>{
        try {
            const response = await axios.request(options);
            // setMenu(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchMenu();
  })

}

