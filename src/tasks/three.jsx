import {useState} from 'react'
import { BackToHome } from "../App";
import { fetchData } from './two'
import * as visualizations from '../components/visualization'

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/

const filter_by_gender = (users) => {
  const all = users
  const males = []
  const females = []
  users.forEach(user => user['gender'] == 'male' ? males.push(user) : females.push(user))
  return {all, males, females}
}

const ChallengeThree = () => {
  
  const [visualType, setVisualType] = useState('gender')
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  if (!users.length) {

    fetchData({ page:1, results:100 })
    .then(response => response.json())
    .then(({ results:users=[] }) => {
      if ( users.length ) {
        setUsers(users)
        setIsLoading(false)
      }
    })
    .catch(() => setIsLoading(false))
  }  

  const VisualComponent = visualizations[visualType]

  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-grey-lighter theme-override">Challenge 3</h1>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Fetch 100 users from the same api as before, and visualize their
        distribution by <code>age</code>, <code>gender</code>,
        <code>country</code>, and <code>registration date</code>.
      </h2>

      {/* Insert your data visualizations here */}
      <br /><h1 className="title is-3 has-text-grey-lighter theme-override">Solution:</h1>
      
      <div className="has-text-grey-lighter theme-override">Select Visualization:</div>
      
      <button onClick={() => setVisualType('gender')}>gender</button>
      <button onClick={() => setVisualType('age')}>age</button>
      <button onClick={() => setVisualType('country')}>country</button>
      <button onClick={() => setVisualType('registration_date')}>registration date</button>

      <div style={{padding: '10px', backgroundColor: 'white', marginTop: '20px'}}>
        <VisualComponent {...filter_by_gender(users)}/>
      </div>
    </>
  );
};

export default ChallengeThree;
