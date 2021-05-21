import React from 'react';
import { Bar } from 'react-chartjs-2';

const counts_per_country = (users) => {
  
  const counts = {}

  users.forEach(user => {
    const {gender, location: { country }} = user
    country in counts 
      ? gender in counts[country]
          ? counts[country][gender] += 1
          : counts[country][gender] = 1
      : counts[country] = {[gender]: 1}
  })

  return counts
}

export const country = (props) => {
  const {all=[], males=[], females=[]} = props

  const counts = counts_per_country(all)

  return <Bar 
    data={{
      labels: Object.keys(counts),
      datasets: [
        {
          label: 'Males',
          data: Object.values(counts).map(({male=0}) => male),
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: 'Females',
          data: Object.values(counts).map(({female=0}) => female),
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    }} 
    options={{
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
          },
        ],
      },
    }} 
  />
}
