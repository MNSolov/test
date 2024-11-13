function ArrowDirection({
    x,
    y,
    length,
    color = "white",
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
        y1={y - length + 5}
        x2={x}
        y2={y - length}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x + 5}
        y1={y - length + 5}
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
        y1={y - 5}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={x + 5}
        y1={y - 5}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </>
  );

  return direction ? arrowDown : arrowUp;
}

export default ArrowDirection