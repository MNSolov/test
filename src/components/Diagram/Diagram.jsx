import { useRef, useState, useLayoutEffect } from "react";
import Bar from "../Bar/Bar";
import Arrow from "../Arrow/Arrow";
import NormBar from "../NormBar/NormBar";

function Diagram({boxWidth, widthBar}) {
  const space = (boxWidth - 4 * widthBar) / 3;
  let x = 0;

  const graph = [
    <>
      <Bar
        x={x}
        y={500}
        width={widthBar}
        v1={100}
        v2={150}
        v3={50}
        c1="#4AB6E8"
        c2="#AA6FAC"
        c3="#E85498"
        legend="dev"
        fontSize={14}
      />
      <Arrow
        x1={x}
        y1={500}
        x2={x + widthBar + space}
        widthBar={widthBar}
        heightBar1={100 + 150 + 50}
        heightBar2={120 + 100 + 150}
        dx2={-10}
        dy={10}
      />
    </>,
  ];
  x = x + widthBar + space;

  graph.push(
    <>
      <Bar
        x={x}
        y={500}
        width={widthBar}
        v1={120}
        v2={100}
        v3={150}
        c1="#4AB6E8"
        c2="#AA6FAC"
        c3="#E85498"
        legend="test"
        fontSize={14}
      />
      <Arrow
        x1={x}
        y1={500}
        x2={x + widthBar + space}
        widthBar={widthBar}
        heightBar1={120 + 100 + 150}
        heightBar2={80 + 170 + 90}
        dx1={10}
        dy={10}
      />
    </>
  );
  x = x + widthBar + space;

  graph.push(
    <Bar
      x={x}
      y={500}
      width={widthBar}
      v1={80}
      v2={170}
      v3={90}
      c1="#4AB6E8"
      c2="#AA6FAC"
      c3="#E85498"
      legend="prod"
      fontSize={14}
    />
  );
  x = x + widthBar + space;

  graph.push(
    <NormBar x={x} y={500} width={widthBar} value={350} legend="норматив" backgroundColor='#4AB6E8' fontSize={14}/>
  );

  return (
    <svg
        width="100%"
        viewBox={`0 0 ${boxWidth} 600`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        {graph}
    </svg>
  )
}

export default Diagram