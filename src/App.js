import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './styles/Card.css';
import Card from './Card.jsx';
import Greetings from './Greetings.jsx';
import Random from './Random.jsx';
import BoxColor from './BoxColor.jsx';


function App() {
  return (
    <div className="App">

        {/* Iteration 1 */}

      <Card
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Card
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Iteration 2 */}

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="en">François</Greetings>

      {/* Iteration 3 */}

      <Random min={1} max={6}/>
      <br></br>
      <Random min={1} max={100}/>

      {/* Iteration 4 */}

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}
export default App;
