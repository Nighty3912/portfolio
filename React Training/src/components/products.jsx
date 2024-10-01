import axios from "axios";
import React,{useEffect} from "react";


function Products(){


    useEffect(() => {
        axios.get("http://localhost:5000/")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [])
    return(
        <>
        Products
        </>
    )
}

export default Products