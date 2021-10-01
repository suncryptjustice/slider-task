import React from "react";

const Dot = React.memo((props) => {
  const { id, isActive, onClick } = props;

  const handleClick = React.useCallback(() => {
    onClick(id);
  }, [id, onClick]);
  return (
    <div
      id={id}
      onClick={handleClick}
      className={
        isActive ? "SliderSwitchDot SliderSwitchActiveDot" : "SliderSwitchDot"
      }
    />
  );
});

const SliderSwitch = React.memo((props) => {
  const { length, activePage, dotWasClicked } = props;

  const handleDotWasClicked = React.useCallback(
    (value) => {
      dotWasClicked(value);
    },
    [dotWasClicked]
  );

  const renderDots = React.useCallback(() => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      dots.push(
        <Dot
          onClick={handleDotWasClicked}
          key={i}
          id={i}
          isActive={i === activePage}
        />
      );
    }
    return dots;
  }, [activePage, length, handleDotWasClicked]);

  return <div className="SliderSwitch">{length > 1 && renderDots()}</div>;
});

export default SliderSwitch;
