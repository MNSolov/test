import ArrowDirection from "../ArrowDirection/ArrowDirection";

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
  colorLine = "#898290",
  widthRect = 70,
  heightRect = 30,
  radiusRect = 15,
  fontSize = 14
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
        fill={heightBar1 > heightBar2 ? "#FC440F" : "#00CC99"}
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
        fontSize={fontSize}
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

export default Arrow