const HorizontalSlider = ({ card }) => {
  // Check if the card has a timeline icon
  const hasTimelineIcon = card.timelineIcon !== "";

  return (
    // Container for the Horizontal Slider component with margin and padding
    <div className="mt-[190px] p-4">
      {/* Render the timeline icon if it exists */}
      {hasTimelineIcon && <img src={card.timelineIcon} alt="Timeline Icon" />}
    </div>
  );
};

export default HorizontalSlider;
