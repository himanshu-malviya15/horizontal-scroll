import { useState, useRef, useEffect } from "react";
import { carditems } from "./carditems"; // Replace 'yourCardItemsFilePath' with the correct path

const HorizontalTimeline = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const itemWidth =
        containerRef.current.children[selectedItemIndex]?.offsetWidth || 0;
      const scrollLeft =
        itemWidth * selectedItemIndex -
        (containerRef.current.offsetWidth - itemWidth) / 2;
      containerRef.current.scrollLeft = scrollLeft;
    }
  }, [selectedItemIndex]);

  const handleDotClick = (index) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  const handleNextClick = () => {
    setSelectedItemIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex < carditems.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  return (
    <div style={{ overflowX: "auto" }} ref={containerRef}>
      <div style={{ display: "flex", whiteSpace: "nowrap" }}>
        {carditems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: "200px", // Adjust width as needed
              border:
                index === selectedItemIndex
                  ? "2px solid blue"
                  : "2px solid transparent",
              padding: "10px",
              margin: "10px",
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            <img src={item.url} alt={`Image ${index}`} />
            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default HorizontalTimeline;
