import {useState, useEffect} from 'react';

export function timer(){

    useEffect(() => {
        const timmer  = setInterval(() => {
            console.log("tick");
        } , 1000) ;
        
       
        return() => {
            clearInterval(timmer);
        };
    }, []);
     return(
        <div>
            <h2>Check the console.</h2>
        </div>
     )
}