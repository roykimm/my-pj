import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)


const BarChart = () => {

    const [ chart , setChart ] = useState([]);

    const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const apikey = "coinrankinge8fdd68ddefac001dfbb2b1ce8a290baac64bfa285a51e95";

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                    'x-access-token' : `${apikey}`,
                    'Access-Control-Allow-Origin' : "*"
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(err => {
                console.log(err)
            })
        }

        fetchCoins()
    }, [baseUrl, proxyUrl, apikey])

    const data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        maintainAspectRatio : false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend : {
            labels : {
                fontSize : 26
            }
        }
    }

    return (
        <div>
            <Bar 
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default BarChart;