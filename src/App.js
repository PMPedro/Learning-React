import React, {useState} from 'react'; 
import Tweet from './Tweet';
import './Css/App.css';
function App ()
{
const [users, setUser] = useState([
  { name: "Ed", message: "My name is ED!"},
  { name: "Pedro", message: "1st React Website!"},
  { name: "James Harden", message: "BEARD!"},
])


  return (
    <div className="app">
     {users.map(user => (
       <Tweet name={user.name} message = {user.message}/>
     ))}
    </div> 
  );
}

export default App;