/*  Author: Shamik
Last edited: 10/1/22

*/

import axios from 'axios';


//base URL for making API Calls to Node JS server
const instance =  axios.create({
    baseURL: 'https://astren-app-backend.herokuapp.com/',
})

export default instance
