import {useState, useEffect} from 'react'
import { BackToHome } from "../App";

/*
  hint: the API takes page and results as query string
  eg: `?page=3&results=10`
*/

export const fetchData = ({page=1, results=5}) => {
  const url = `https://randomuser.me/api/?seed=dexi-interview&page=${page}&results=${results}`
  return fetch(url)
}

const ChallengeTwo = () => {

  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchUsers = (page=1) => {
    
    setIsLoading(true)
    
    fetchData({ page, results:5 })
    .then(response => response.json())
    .then((response) => {
      const { results:new_users=[] } = response
      // console.log('SUCCESS', response)
      // console.log('current users', users)
      // console.log('new users', new_users);
      if ( new_users.length ) {
        // append new users to existing users
        setUsers([...users, ...new_users])
        setIsLoading(false)
      }
    })
    .catch((error) => {
      // console.log('ERROR', error)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    // get first 5 users on initial render
    if (!users.length) fetchUsers()
  }, [])

  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-grey-lighter theme-override">Challenge 2</h1>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Fetch 5 users from the api
        <code>https://randomuser.me/api/?seed=dexi-interview</code> and display
        them in a table.
      </h2>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        A <code>table-example.png</code> has been provided for guidance on
        styling.
      </h2>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Pay close attention to empty and loading states
      </h2>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        The table should also have a <code>Load More</code> button that fetches
        the next page of the API and appends the results to the existing users.
      </h2>

      {/* Insert your table code here */}
      <br /><h1 className="title is-3 has-text-grey-lighter theme-override">Solution:</h1>

      <table 
        className='table is-hoverable is-fullwidth'
        style={{borderRadius: '10px'}}
      >
        <thead>
          <tr>
            {['NAME', 'AGE', 'LIVES IN', 'ADDRESS', 'CONTACTS'].map(head => {
              
              return <th key={head}
                className="is-size-7 is-family-sans-serif has-text-grey"
              >{head}</th>
            })}
          </tr>
        </thead>
        <tbody>
          { !isLoading && !users.length
            ? <tr><td>No data! Please check your connection and refresh the page.</td></tr> 
            : users.map((user={}) => {
              // destructure user data
              const {
                login: {uuid}, 
                name: {first, last}, 
                email, 
                picture: {thumbnail},
                cell, phone, 
                location: {
                  country, state, city, 
                  street: {number, name}, 
                  postcode
                }, 
                dob: {age},
                // nat, registered,
              } = user

              return <tr key={uuid} className="is-size-7 is-family-sans-serif">

                {/* NAME */}
                <td>
                  <div style={{display: 'flex'}} className="is-flex-direction-row">

                    <div style={{margin: '0 10px'}}>
                      <img src={thumbnail} alt={`${first} ${last}`} style={{borderRadius: '50%'}} width="40"/>
                    </div>
                    <div>
                      <div className="has-text-weight-semibold">
                        {`${first} ${last}`}
                      </div>
                      <div className="has-text-grey">
                        {email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* AGE */}
                <td>{age}</td>
                
                {/* LIVES IN */}
                <td>{`${state}, ${country}`}</td>
                
                {/* ADDRESS */}
                <td>{`${number} ${name} ${city} (${postcode})`}</td>
                
                {/* CONTACTS */}
                <td>
                  <div>
                    <div className="has-text-weight-semibold">
                      {`Cell: ${cell}`}
                    </div>
                    <div className="has-text-grey">
                      {`Phone: ${phone}`}
                    </div>
                  </div>
                </td>
              
              </tr>
            })
          }
        </tbody>
      </table>

      <button onClick={()=>{ fetchUsers(page+1); setPage(page+1) }}
      >
        {isLoading? 'Loading...' : 'Load More'}
      </button>

    </>
  );
};

export default ChallengeTwo;
