import { Doughnut } from 'react-chartjs-2';


export const gender = (props) => {
  const {all=[], males=[], females=[]} = props

  return <Doughnut
    data={{
      labels: ["Males", "Females"],
      datasets: [{
        label: '# of Votes',
        data: [males.length, females.length],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1
      }]
    }}
  />
}
