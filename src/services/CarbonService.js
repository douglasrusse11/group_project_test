import getAccessToken from "../helpers/getAccessToken";

const baseURL = 'https://www.carboninterface.com/api/v1/estimates';
const headers = {"Authorization": `Bearer ${getAccessToken()}`,
                 "Content-Type": "application/json"}

export const getTravelEstimate = (vehicle_model_id) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "type": "vehicle",
            "distance_unit": "mi",
            "distance_value": 5520,
            "vehicle_model_id": `${vehicle_model_id}` 
        })
    })
    .then(res => res.json())
}

export const getElectricityEstimate = (electricity_value) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
                "type": "electricity",
                "electricity_unit": "kwh",
                "electricity_value": electricity_value,
                "country": "gb",
                "state": ""
        })
    })
    .then(res => res.json())
}