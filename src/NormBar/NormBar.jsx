function NormBar({
  x,
  y,
  width,
  value,
  legend,
  radius = 10,
  fontSize = 32,
  fontSizeLegend = 10,
  fontFamily = "Roboto",
  color = "#898290",
  backgroundColor = 'blue'
}) {
  const heightText = fontSize * 1.7;

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
          <line x1="0" y1="0" x2="0" y2="10" stroke={backgroundColor} strokeWidth={30} />
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
        x={x + (width - width / 1.5) / 2}
        y={y - value / 2 - heightText / 2}
        width={width / 1.5}
        height={heightText}
        rx={5}
      />
      <text
        x={x + width / 2}
        y={y - value / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
        fontSize={fontSizeLegend}
        fill="#898290"
      >
        {legend}
      </text>
    </>
  );
}

export default NormBar