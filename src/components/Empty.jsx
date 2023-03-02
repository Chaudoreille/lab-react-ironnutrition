import React, { useEffect, useRef } from 'react';

const Empty = () => {
  let canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext('2d');
    canvas.current.width = 200;
    canvas.current.height = 200;
    context.lineCap = 'round';
    context.lineWidth = 15;

    // draw circle
    context.beginPath();
    context.arc(100, 100, 55, 0, Math.PI * 2);
    context.stroke();

    // draw cross-circle line
    context.beginPath();
    context.moveTo(25, 175);
    context.lineTo(175, 25);
    context.stroke();
  }, []);

  return (
    <div>
      <p style={{ fontWeight: 600 }}>
        Oops! There is no more content to display.
      </p>
      <canvas ref={canvas} style={{ width: '200px', height: '200px' }}></canvas>
    </div>
  );
};

export default Empty;
