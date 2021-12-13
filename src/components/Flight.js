import {getFlightEstimate} from '../services/CarbonService';
import { useState } from 'react';

const Flight = ({updateFormData}) => {
    // europe berlin =          ber
    // africa SA =              tzn
    // australia/NZ sydney =    syd
    // americas texas =         ljn
    // asia beijing =           pek

    const [display, setDisplay] = useState({europe: false,
                                            africa: false,
                                            australia: false,
                                            americas: false,
                                            asia: false})

    const onChange = (e) => {
        console.log(e.target)
        const newDisplay = {...display};
        newDisplay[e.target.id] = !newDisplay[e.target.id]
        setDisplay(newDisplay);
    }

    return (
        <>
        <h2>Flights</h2>
                <div>
                    <input onChange={onChange} type="checkbox" id="europe" name="flights" value="ber"
                         />
                    <label htmlFor="europe">Europe</label>
                    {display.europe &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input type="number" id="number_of_flights_europe"/></>}
                    
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="africa" name="flights" value="tzn"
                    />
                    <label htmlFor="africa">Africa</label>
                    {display.africa &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input type="number" id="number_of_flights_africa"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="australia" name="flights" value="syd"
                    />
                    <label htmlFor="australia">Australia/NZ</label>
                    {display.australia &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input type="number" id="number_of_flights_australia"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="americas" name="flights" value="ljn"
                    />
                    <label htmlFor="americas">Americas</label>
                    {display.americas && 
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input type="number" id="number_of_flights_americas"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="asia" name="flights" value="pek"/>
                    <label htmlFor="asia">Asia</label>
                    {display.asia &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input type="number" id="number_of_flights_asia"/></>}
                </div>
                </>
    )
}

export default Flight;