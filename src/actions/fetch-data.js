import axios from 'axios';

const API_KEY = 'you api key' // API KEY

const ROOT_URL = `https://api.nasa.gov/planetary/apod`// API ENDPOINT





export  function fetchData(dates) {

	const url = `${ROOT_URL}?date=${dates}&api_key=${API_KEY}`;
	

	
	const request = axios.get(url);  // GET REQUEST

	return { // return plain object with props
		type: 'FETCH_DATA', // Action Type
		payload: request // Action Payload (cargo)
	};

}


