import Horizontal from "../Slider/Horizontalslider";

const Cards = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[360px] w-[360px] sm:max-w-[720px] sm:max-h-[560px] md:w-[1200px] md:h-[1200px] overflow-hidden bg-neutral-200"
    >
      {/* Image */}
      <img
        src={card.imageUrl}
        alt="Card"
        className="absolute inset-0 w-full h-full object-fit z-0 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Text divs */}
      <div className="absolute inset-0 flex flex-col items-center mt-5">
        {/* Checking if both year and title exist */}
        {card.year && card.title && (
          <div className="flex">
            <div className="w-41 h-8 flex-shrink-0 bg-black text-white flex items-center justify-center">
              <p className="text-sm font-bold p-2">{card.year}</p>
            </div>
            <div className="w-41 h-8 flex-shrink-0 bg-white flex items-center justify-center">
              <p className="text-sm font-bold p-2">{card.title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content below the image (if any) */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 mb-2 sm:mb-14">
        {/* Your main text */}
        <div className="text-black font-semibold font-lato text-[9px] sm:text-[14px]">
          <p>{card.description1}</p>
        </div>

        {/* Additional text below */}
        <div className="text-black font-semibold font-lato text-[9px] mt-2 sm:text-[14px]">
          <p>{card.description2}</p>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div className="absolute inset-0 w-50 mt-[120px] h-50 sm:mt-[300px]">
        <Horizontal card={card} />
      </div>
    </div>
  );
};

export default Cards;
