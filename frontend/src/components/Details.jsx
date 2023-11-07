import React, { useEffect, useState } from "react";
import axios from "axios";
const Details = () => {

    const [leagues, setGetLeague] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            };
    
            try {
                const response = await axios.request(options);
                setGetLeague(response.data.response)
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[])

    const league = leagues[0];
    const league1 = leagues[1];
    const league2 = leagues[2];
    const league3 = leagues[3];
    const league4 = leagues[4];
    const league5 = leagues[5];
    const league6 = leagues[6];
    const league7 = leagues[7];
    const league8 = leagues[8];
    const league9 = leagues[9];
    const league10 = leagues[10];

    return(
        <div className="details" style={{display:"block"}} >
            <h1>Listes des ligues:</h1>
            <ul style={{display:"flex"}} >
                {league &&
                <li className="league"  key={league}>
                    {league.league.name}
                    <img src={league.league.logo} alt="" srcset="" />
                </li>
                }
                {league1 &&
                <li className="league"  key={league1}>
                    {league1.league.name}
                    <img src={league1.league.logo} alt="" srcset="" />
                </li>
                }
                {league2 &&
                <li className="league"  key={league2}>
                    {league2.league.name}
                    <img src={league2.league.logo} alt="" srcset="" />
                </li>
                }
                {league3 &&
                <li className="league"  key={league3}>
                    {league3.league.name}
                    <img src={league3.league.logo} alt="" srcset="" />
                </li>
                }
                {league4 &&
                <li className="league"  key={league4}>
                    {league4.league.name}
                    <img src={league4.league.logo} alt="" srcset="" />
                </li>
                }
                {league5 &&
                <li className="league"  key={league5}>
                    {league5.league.name}
                    <img src={league5.league.logo} alt="" srcset="" />
                </li>
                }
                {league6 &&
                <li className="league"  key={league6}>
                    {league6.league.name}
                    <img src={league6.league.logo} alt="" srcset="" />
                </li>
                }
                {league7 &&
                <li className="league"  key={league7}>
                    {league7.league.name}
                    <img src={league7.league.logo} alt="" srcset="" />
                </li>
                }
                {league8 &&
                <li className="league"  key={league8}>
                    <p> {league8.country.name} </p>
                    {league8.league.name}
                    <img src={league8.league.logo} alt="" srcset="" />
                </li>
                }
                {league9 &&
                <li className="league"  key={league9}>
                    <p> {league9.country.name} </p>
                    {league9.league.name}
                    <img src={league9.league.logo} alt="" srcset="" />
                </li>
                }
                {league10 &&
                <li className="league"  key={league10}>
                    <p> {league10.country.name} </p>

                    {league10.league.name}
                    <img src={league10.league.logo} alt="" srcset="" />
                </li>
                }

            </ul>
        </div>
    )
}

export default Details;