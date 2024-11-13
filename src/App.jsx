import { useState, useLayoutEffect, useRef } from 'react'
import Description from './components/Description/Description';
import Diagram from './components/Diagram/Diagram';

import './App.css'

function App() {
  const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(600);

  let x = 0;

  useLayoutEffect(() => {
    const controller = new AbortController();
    
    setBoxHeight(boxRef.current.offsetHeight);
    setBoxWidth(boxRef.current.offsetWidth);

    window.addEventListener(
      "resize",
      () => {
        setBoxWidth(boxRef.current.offsetWidth);
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  }, []);

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
      ref={boxRef}
    >
      <Diagram boxWidth={boxWidth} widthBar={80}/>
      <Description
        legendArray={["Клиентская часть", "Серверная часть", "База данных"]}
        colorArray={["#4AB6E8", "#AA6FAC", "#E85498"]}
      />
    </div>
  );
}

export default App
