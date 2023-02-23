import axios from 'axios';
import { useEffect, useState } from 'react';
const url = 'http://localhost:9898/services/check-auth/details';
export function Auth() {

    const fetchData = async() => {
        // let x = 0;
        try {
            const res = await axios (url);
            console.log(res.data);
            setValue(res.data)
            // x = parseFloat(Object.values(res.data));
            // console.log(x);
            // console.log(parseFloat(Object.values(res.data)));
        } catch (err) {
            console.log(err);
        }
    }

    // useEffect(() => {
    //     fetchData();
    //     // window.addEventListener("load",fetchData);
    // }, []);

    const [value,setValue]=useState(() => {
        console.log("running use state");
        fetchData();
    })
    // var v = Object.keys(value).map(function (key) { return value[key]; });
    return(
        <>
            <h1>Auth</h1>
            {/* <h2>${fetchData()}</h2> */}
            {/* <h2>{parseFloat(Object.values(value))}</h2> */}
            <h2>{Object.values(value)}</h2>
            <p>{JSON.stringify(value)}</p>
        </>
    )
    
}