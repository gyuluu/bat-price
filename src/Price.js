import React,{ useState, useEffect }  from "react";
import axios from "axios";

export default function Price() {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("https://api.cryptonator.com/api/ticker/bat-usd").then(
            resp => {
                setPrice(resp.data.ticker.price);
            });
        }, 500);
        return () => clearInterval(interval);     
    }, []);

    return (
        <div className="price-wrapper">
            <div className="price">${price}</div>
        </div>  
    )
}