import { useState, useLayoutEffect, useRef } from 'react'

import './App.css'
function Bar({ x, y, width, radius, v1, v2, v3, c1, c2, c3, legend = "" }) {
  return (
    <>
      <path
        d={`M${x},${y - v3 - v2} v-${
          v1 - radius
        } a${radius},${radius} 0 0 1 ${radius},-${radius} h${
          width - 2 * radius
        } a${radius},${radius} 0 0 1 ${radius},${radius} v${v1 - radius}`}
        fill={c1}
      />
      <text
        x={x + width / 2}
        y={y - v3 - v2 - v1 / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="32"
        fill="white"
      >
        {v1}
      </text>

      <rect x={x} y={y - v3 - v2} width={width} height={v2} fill={c2} />
      <text
        x={x + width / 2}
        y={y - v3 - v2 / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="32"
        fill="white"
      >
        {v2}
      </text>

      <path
        d={`M${x},${y - v3} v${
          v3 - radius
        } a${radius},${radius} 0 0 0 ${radius},${radius} h${
          width - 2 * radius
        } a${radius},${radius} 0 0 0 ${radius},-${radius} v-${v3 - radius}`}
        fill={c3}
      />
      <text
        x={x + width / 2}
        y={y - v3 / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="32"
        fill="white"
      >
        {v3}
      </text>

      <text
        x={x + width / 2}
        y={y + 20}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="20"
        fill="black"
      >
        {legend}
      </text>
    </>
  );
}

function ArrowDirection({
  x,
  y,
  length,
  color = "black",
  strokeWidth = 2,
  direction = false,
}) {
  const arrowUp = (
    <>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y - length}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x - 5}
        y1={y - length + 10}
        x2={x}
        y2={y - length}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x + 5}
        y1={y - length + 10}
        x2={x}
        y2={y - length}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </>
  );

  const arrowDown = (
    <>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y - length}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x - 5}
        y1={y - 10}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x + 5}
        y1={y - 10}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </>
  );

  return direction ? arrowDown : arrowUp;
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  widthBar,
  heightBar1,
  heightBar2,
  heightArrow = 30,
  dx1 = 0,
  dx2 = 0,
  dy = 0,
  colorLine = "blue",
  widthRect = 80,
  heightRect = 40,
  radiusRect = 10,
}) {
  return (
    <>
      <polyline
        fill="none"
        stroke={colorLine}
        strokeWidth="1"
        points={`${x1 + widthBar / 2 + dx1},${y1 - heightBar1 - dy} ${
          x1 + widthBar / 2 + dx1
        },${y1 - Math.max(heightBar1, heightBar2) - heightArrow - dy} ${
          x2 + widthBar / 2 + dx2
        },${y1 - Math.max(heightBar1, heightBar2) - heightArrow - dy} ${
          x2 + widthBar / 2 + dx2
        },${y1 - heightBar2 - dy}`}
      />
      <rect
        rx={radiusRect}
        x={x1 + widthBar / 2 + dx1 + (x2 - x1 + dx2) / 2 - widthRect / 2}
        y={
          y1 -
          Math.max(heightBar1, heightBar2) -
          heightArrow -
          dy -
          heightRect / 2
        }
        width={widthRect}
        height={heightRect}
        fill={heightBar1 > heightBar2 ? "orange" : "yellow"}
      />
      <ArrowDirection
        x={x1 + widthBar / 2 + dx1 + (x2 - x1 + dx2) / 2 - widthRect / 2 + 15}
        y={
          y1 -
          Math.max(heightBar1, heightBar2) -
          heightArrow -
          dy -
          heightRect / 2 -
          4 +
          heightRect -
          3
        }
        length={heightRect - 15}
        direction={heightBar1 > heightBar2}
      />
      <text
        x={x1 + widthBar / 2 + dx1 + (x2 - x1 + dx2) / 2 - widthRect / 2 + 45}
        y={y1 - Math.max(heightBar1, heightBar2) - heightArrow - dy}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="20"
        fill="white"
      >
        {heightBar2 - heightBar1 > 0
          ? `+${heightBar2 - heightBar1}`
          : heightBar2 - heightBar1}
      </text>
      <line
        x1={x2 + widthBar / 2 + dx2}
        y1={y1 - heightBar2 - dy}
        x2={x2 + widthBar / 2 + dx2 - 5}
        y2={y1 - heightBar2 - dy - 10}
        stroke={colorLine}
        strokeWidth="1"
      />
      <line
        x1={x2 + widthBar / 2 + dx2}
        y1={y1 - heightBar2 - dy}
        x2={x2 + widthBar / 2 + dx2 + 5}
        y2={y1 - heightBar2 - dy - 10}
        stroke={colorLine}
        strokeWidth="1"
      />
    </>
  );
}

function NormBar({
  x,
  y,
  width,
  value,
  legend,
  radius = 15,
  fontSize = 32,
  color = "black",
}) {
  const heightText = fontSize * 1.5;

  return (
    <>
      <defs>
        <pattern
          id="diagonalHatch"
          width="25"
          height="10"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="10" stroke="blue" strokeWidth={30} />
        </pattern>
      </defs>

      <rect
        fill="url(#diagonalHatch)"
        x={x}
        y={y - value}
        width={width}
        height={value}
        rx={radius}
      />
      <rect
        fill="white"
        x={x + (width - width / 1.3) / 2}
        y={y - value / 2 - heightText / 2}
        width={width / 1.3}
        height={heightText}
        rx={radius}
      />
      <text
        x={x + width / 2}
        y={y - value / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize={fontSize}
        fill={color}
      >
        {value}
      </text>

      <text
        x={x + width / 2}
        y={y + 20}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fontSize="20"
        fill="black"
      >
        {legend}
      </text>
    </>
  );
}

function Description({ legendArray, colorArray }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {legendArray.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "5px",
                backgroundColor: colorArray[index],
                marginRight: "10px",
              }}
            />
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(600);
  const width = 100;
  const space = (boxWidth - 4 * width) / 3;
  let x = 0;

  useLayoutEffect(() => {
    const controller = new AbortController();
    setBoxHeight(boxRef.current.offsetHeight);
    console.log(boxRef.current.offsetHeight);
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

  const graph = [
    <>
      <Bar
        x={x}
        y={500}
        width={width}
        v1={100}
        v2={150}
        v3={50}
        radius={15}
        c1="orange"
        c2="yellow"
        c3="green"
        legend="dev"
      />
      <Arrow
        x1={x}
        y1={500}
        x2={x + width + space}
        widthBar={width}
        heightBar1={100 + 150 + 50}
        heightBar2={120 + 100 + 150}
        dx2={-10}
        dy={10}
      />
    </>,
  ];
  x = x + width + space;

  graph.push(
    <>
      <Bar
        x={x}
        y={500}
        width={width}
        v1={120}
        v2={100}
        v3={150}
        radius={15}
        c1="orange"
        c2="yellow"
        c3="green"
        legend="test"
      />
      <Arrow
        x1={x}
        y1={500}
        x2={x + width + space}
        widthBar={width}
        heightBar1={120 + 100 + 150}
        heightBar2={80 + 170 + 90}
        dx1={10}
        dy={10}
      />
    </>
  );
  x = x + width + space;

  graph.push(
    <Bar
      x={x}
      y={500}
      width={width}
      v1={80}
      v2={170}
      v3={90}
      radius={15}
      c1="orange"
      c2="yellow"
      c3="green"
      legend="prod"
    />
  );
  x = x + width + space;

  graph.push(
    <NormBar x={x} y={500} width={width} value={350} legend="normal" />
  );

  return (
    <div style={{ height: "auto", padding: "50px" }} ref={boxRef}>
      <svg
        width="100%"
        viewBox={`0 0 ${boxWidth} 600`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        {graph}
      </svg>
      <Description
        legendArray={["Клиентская часть", "Серверная часть", "База данных"]}
        colorArray={["orange", "yellow", "green"]}
      />
    </div>
  );
}

export default App
