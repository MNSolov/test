import { useState, useEffect } from 'react'
import Description from './components/Description/Description';
import Diagram from './components/Diagram/Diagram';

import './App.css'

function App() {
  
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(600);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let x = 0;

  const arrayRequest = [
    'https://rcslabs.ru/ttrp1.json',
    'https://rcslabs.ru/ttrp2.json',
    'https://rcslabs.ru/ttrp3.json',
    'https://rcslabs.ru/ttrp4.json',
    'https://rcslabs.ru/ttrp5.json',
  ]

  console.log(data)

  useEffect(() => {

    if (isLoading) {
      Promise.all(arrayRequest.map((url) => fetch(url)))
        .then((responses) => Promise.all(responses.map((response) => response.json())))
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
    }

  }, []);

  const diagramCard = data.map((item) => {
    return (
      <div style={{
          width: '25%', 
          minWidth: '500px', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          height: "auto", 
          padding: "50px",
          border: "1px solid #898290",
          borderRadius: "7px"
        }} 
      >
        {item ? <Diagram widthBar={80} data={item}/> : <span>Loading...</span>}
        <Description
          legendArray={["Клиентская часть", "Серверная часть", "База данных"]}
          colorArray={["#4AB6E8", "#AA6FAC", "#E85498"]}
        />
      </div>
    );
  })

  return (
    <div>
      {diagramCard}
    </div>
  );
}

export default App
