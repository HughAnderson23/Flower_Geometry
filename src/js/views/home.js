import React, { useEffect, useRef } from 'react';
import "../../styles/home.css";

export const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const radius = 20;
    const numCircles = 500;
    let circlesDrawn = 0;

    const drawCircle = (x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    };

    const getCirclePositions = (centerX, centerY, radius) => {
      const positions = [];
      const numSides = 6;
      for (let i = 0; i < numSides; i++) {
        const angle = (i * 2 * Math.PI) / numSides;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        positions.push({ x, y });
      }
      return positions;
    };

    const drawFlowerOfLife = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const positions = [{ x: centerX, y: centerY }];

      const intervalId = setInterval(() => {
        if (circlesDrawn < numCircles) {
          const currentCircle = positions[circlesDrawn];
          drawCircle(currentCircle.x, currentCircle.y);
          const newPositions = getCirclePositions(currentCircle.x, currentCircle.y, radius);
          newPositions.forEach(pos => {
            // Only add new positions if they are not already in the positions array
            if (!positions.some(p => p.x === pos.x && p.y === pos.y)) {
              positions.push(pos);
            }
          });
          circlesDrawn++;
        } else {
          clearInterval(intervalId);
        }
      }, 770);
    };

    drawFlowerOfLife();
  }, []);

  return (
    <div className="text-center mt-5">
      <canvas ref={canvasRef} width={500} height={500} className="flower-canvas"></canvas>
    </div>
  );
};

