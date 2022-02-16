import React, { useEffect, useState } from 'react';
// import BarChart1 from './BarChart1';
import { Bar } from "react-chartjs-2";
import faker from "faker";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { GlobeIcon } from '@heroicons/react/solid';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const TodayVisotor = ({todayVisotor}) => {

    console.log(todayVisotor)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: false,
            text: '오늘자 방문객',
          },
          // labels: {
          //   // This more specific font property overrides the global property
          //       font: {
          //           size: 14
          //       }
          // }
        },
      };
    
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 1
          },
        ],
      };  

    const chartData = {
        labels: todayVisotor.map((crypto) => crypto.title),
        datasets: [
            {
                // label: "Price in USD",
                data: todayVisotor.map((crypto) => crypto.data),
                backgroundColor: [
                    "#d98aac",
                    "#009688",
                    "#e2af5a",
                    "#673AB7",
                    "#3F51B5",
                    "#2196F3",
                    "#03A9F4",
                    "#00BCD4",
                    "#009688",
                    "#4CAF50",
                    "#CDDC39",
                    "#FFEB3B",
                    "#FFC107",
                    "#FF9800",
                    "#4D2F40",
                    "#2a71d0",
                ],
                color : "white"
            }
        ]
    }

    return (
        <div className="bg-[#354060] px-3 py-2 rounded-lg">
            <div className="flex items-center ml-3">
                <GlobeIcon className="mr-2 w-5 h-5 text-white dark:text-blue-500" />
                <p className="font-semibold">오늘자 방문객</p>
            </div>
            <div className="mt-3">
                <Bar options={options} data={chartData} />
            </div>
            
            {/* {
                chartData 
                && (
                    <Bar
                        data={chartData}
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "오늘자 방문객"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />
                ) 
            } */}
            
        </div>
    )
}

export default TodayVisotor;

