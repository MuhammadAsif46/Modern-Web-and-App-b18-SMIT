import logo from './logo.svg';
import './App.css';

import carImage from "./images/CAR 1.jpg"
import Button from './components/Button';
import { lastName, username } from "./file"
import Card from './components/card/Card';

function App() {
  let firstname = "Jhon"
  let lastname = "Elia"
  let fullname = firstname + lastname
  return (
    <div>
      {/* <div>
        <h1 style={{ color: "red", backgroundColor: "black", padding: 20 }}>
        {fullname}
        </h1> */}
      {/* <hr /> */}
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzv5L9pfm8AiDbmS1p2s-FTE2nJ6pPV6VHUv4KC1EMA&s=10' alt='image'/> */}
      {/* <img src={carImage} alt='image' />
        <p>Karachi, Pakistan Zindabad</p> */}
      {/* </div> */}
      {/* <div>
        <h1>Saylani</h1>
      </div> */}
      <h1>My App {username}</h1>
      <Button />
      <Button />
      {/* <Button /> */}
      {/* <Button /> */}
      {/* <Button /> */}
      <div className='parent'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>

  );
}

export default App;
