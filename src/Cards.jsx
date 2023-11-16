import Horizontal from "./horizontal-slider";
const Cards = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[580px] w-[580px] overflow-hidden bg-neutral-200"
    >
      {/* Image */}

      <img
        src={card.url}
        alt="Card"
        className="absolute inset-0 w-full h-full object-fit z-0 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Text divs */}

      <div className="absolute inset-0 flex flex-col items-center mt-10">
        {card.year &&
          card.title && ( // Checking if both year and title exist
            <div className="flex">
              <div className="w-42 h-8 flex-shrink-0 bg-black text-white flex items-center justify-center">
                <p className="text-sm font-bold p-2">{card.year}</p>
              </div>
              <div className="w-42 h-8 flex-shrink-0 bg-white flex items-center justify-center">
                <p className="text-sm font-bold p-2">{card.title}</p>
              </div>
            </div>
          )}
      </div>

      {/* Content below the image (if any) */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 mb-10">
        {/* Your main text */}
        <div className="text-black font-semibold font-lato text-sm">
          <p>{card.ptext1}</p>
        </div>

        {/* Additional text below */}
        <div className="text-black font-semibold font-lato text-sm mt-4">
          <p>{card.ptext2}</p>
        </div>
      </div>

      <div className="absolute inset-0 w-50 mt-80 h-50">
        <Horizontal card={card}/>
      </div>
    </div>
  );
};

export default Cards;
