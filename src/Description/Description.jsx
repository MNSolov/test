function Description({ legendArray, colorArray, fontColor='#898290', fontSize='10px' }) {
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
            <span
              style={{
                fontFamily: 'Roboto',
                fontSize: {fontSize},
                color: {fontColor},
              }}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Description