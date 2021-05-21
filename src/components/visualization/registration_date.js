import React from 'react';
import { Line } from 'react-chartjs-2';

const counts_per_year = (users) => {
  
  const counts = {}

  users.forEach(user => {
    const {gender, registered: { date }} = user
    const [year, month] = date.split('-')

    year in counts 
      ? gender in counts[year]
          ? counts[year][gender] += 1
          : counts[year][gender] = 1
      : counts[year] = {[gender]: 1}
  })

  return counts
}


export const registration_date = (props) => {
  const {all=[], males=[], females=[]} = props

  const counts = counts_per_year(all)

  return <Line 
    data={{
      labels: Object.keys(counts),
      datasets: [
        {
          label: 'All',
          data: Object.values(counts).map(({male=0, female=0}) => male + female),
          fill: false,
          backgroundColor: 'rgba(255, 185, 118)',
          borderColor: 'rgba(255, 185, 118, 0.2)',
        },
        {
          label: 'Males',
          data: Object.values(counts).map(({male=0}) => male),
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235, 0.2)',
        },
        {
          label: 'Female',
          data: Object.values(counts).map(({female=0}) => female),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    }} 
    options={{
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }} 
  />
}
