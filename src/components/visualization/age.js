import React from 'react';
import { Radar } from 'react-chartjs-2';

const counts_per_age_group = (users) => {
  let [young, _2, _3, _4, _5, _6, old] = [0,0,0,0,0,0,0]
  
  users.forEach(user => {
    const {dob: { age }} = user
    const decade = Math.floor(age / 10)
    switch (decade) {
      case 0:
      case 1: young += 1; break;
      case 2: _2 += 1; break;
      case 3: _3 += 1; break;
      case 4: _4 += 1; break;
      case 5: _5 += 1; break;
      case 6: _6 += 1; break;
      default: old += 1;   
    }
  })
  return [young, _2, _3, _4, _5, _6, old]
}

export const age = (props) => {
  const {all=[], males=[], females=[]} = props


  return <Radar 
    data={{
      labels: ['below 20', '20-30', '30-40', '40-50', '50-60', '60-70', 'above 70'],
      datasets: [
        {
          label: 'All',
          data: counts_per_age_group(all),
          backgroundColor: 'rgba(255, 185, 118, 0.2)',
          borderColor: 'rgba(255, 185, 118, 1)',
          borderWidth: 1,
        },
        {
          label: 'Males',
          data: counts_per_age_group(males),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Females',
          data: counts_per_age_group(females),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    }} 
    options={{
      scale: {
        ticks: { beginAtZero: true },
      },
    }} 
  />
}
