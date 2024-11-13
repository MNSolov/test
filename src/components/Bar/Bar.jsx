function Bar({ x, y, width, v1, v2, v3, c1, c2, c3, legend = "", fontSize = 32, fontSizeLegend = 10, radius=10 }) {
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
      fontFamily="Roboto"
      fontSize={fontSize}
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
      fontFamily="Roboto"
      fontSize={fontSize}
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
      fontFamily="Roboto"
      fontSize={fontSize}
      fill="white"
    >
      {v3}
    </text>

    <text
      x={x + width / 2}
      y={y + 20}
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Roboto"
      fontSize={fontSizeLegend}
      fill="#898290"
    >
      {legend}
    </text>
  </>
  );
}

export default Bar