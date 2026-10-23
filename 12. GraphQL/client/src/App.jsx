import './App.css'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const GET_USERS = gql`
  query {
    user(id: "1") {
      id
      name
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.getUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
