import { useRef, useState, useLayoutEffect } from "react";
import Bar from "../Bar/Bar";
import Arrow from "../Arrow/Arrow";
import NormBar from "../NormBar/NormBar";

function Diagram({widthBar, data}) {
  const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(600);

  const space = (boxWidth - 4 * widthBar) / 3;
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

  const graph = [
    <>
      <Bar
        x={x}
        y={500}
        width={widthBar}
        v1={data.dev.db}
        v2={data.dev.back}
        v3={data.dev.front}
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
        heightBar1={data.dev.db + data.dev.back + data.dev.front}
        heightBar2={data.prod.db + data.prod.back + data.prod.front}
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
        v1={data.prod.db}
        v2={data.prod.back}
        v3={data.prod.front}
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
        heightBar1={data.prod.db + data.prod.back + data.prod.front}
        heightBar2={data.test.db + data.test.back + data.test.front}
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
      v1={data.test.db}
      v2={data.test.back}
      v3={data.test.front}
      c1="#4AB6E8"
      c2="#AA6FAC"
      c3="#E85498"
      legend="prod"
      fontSize={14}
    />
  );
  x = x + widthBar + space;

  graph.push(
    <NormBar x={x} y={500} width={widthBar} value={data.norm} legend="норматив" backgroundColor='#4AB6E8' fontSize={14}/>
  );

  return (
    <div ref={boxRef}>
      <svg
          width="100%"
          viewBox={`0 0 ${boxWidth} 600`}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          {graph}
      </svg>
    </div>
  )
}

export default Diagram