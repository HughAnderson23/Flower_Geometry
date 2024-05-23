import React, { useEffect, useRef } from 'react';
import "../../styles/home.css";

// Constants
const qp = 1.8756e-18; // Planck Charge in meters^a
const ae = 0.00729735; // Fine Structure Constant

// Calculation
const sqrtAe = Math.sqrt(ae);
const result = qp * sqrtAe;

// Component to display the result with circles
const Hydrogen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const radius = 5;
    const numCircles = Math.round(result * 1e20); // Scale the result for visualization

    // Draw circles in a grid pattern
    const drawCircles = () => {
      const width = canvas.width;
      const height = canvas.height;
      const rows = Math.ceil(Math.sqrt(numCircles));
      const cols = rows;
      const padding = 10;
      let x = padding;
      let y = padding;

      for (let i = 0; i < numCircles; i++) {
        if (x + radius * 2 + padding > width) {
          x = padding;
          y += radius * 2 + padding;
        }
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        x += radius * 2 + padding;
      }
    };

    drawCircles();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Hydrogen Calculation Visualization</h1>
      <p>Result of qp multiplied by the square root of ae: {result}</p>
      <canvas ref={canvasRef} width={500} height={500} className="hydrogen-canvas"></canvas>
    </div>
  );
};

// Export the component
export default Hydrogen;
