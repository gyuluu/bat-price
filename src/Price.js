import React,{ useState, useEffect }  from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';

export default function Price() {
    const [price, setPrice] = useState(0);
    const [change, setChange] = useState(0);
    const [arr, setArr] = useState([]);
    const [ts, setTs] = useState([]);
    const data = {
        labels: [...ts],
        datasets: [
          {
            label: 'BAT Price (USD)',
            data: [...arr],
            fill: false,          
            borderColor: 'red' 
          }
        ]
      }
      const options = {
        maintainAspectRatio: false	
      }

    useEffect(() => {
        const bat = () => {
            axios.get("https://api.cryptonator.com/api/ticker/bat-usd").then(
            resp => {
                setPrice(resp.data.ticker.price);
                setChange(resp.data.ticker.change);
                if (parseFloat(resp.data.ticker.price) !== arr[arr.length - 1]) {
                    let x = parseFloat(resp.data.ticker.price);
                    let y = parseInt(resp.data.timestamp);
                    let date = new Date(y*1000);
                    let hours = date.getHours();
                    let minutes = "0" + date.getMinutes();
                    let seconds = "0" + date.getSeconds();
                    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    setArr(arr => [...arr, x]);
                    setTs(ts => [...ts, formattedTime]); 
                }
            });
        }

        bat();
        const interval = setInterval(bat, 30000);
        return () => clearInterval(interval);     
    }, []);

    return (
        <div>
            <div className="w">
                <div className="price">${price}</div>
                <p className="change">Price (1h ago): ${price-change}</p>
            </div>  
            <div className="canvas-container">
                <Line data={data} options={options}/>
            </div>
        </div>
        
    )
}