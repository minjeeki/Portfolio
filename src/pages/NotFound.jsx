import { useEffect, useRef, useState } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/NotFound.css"

const NotFound = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // 배경을 하얀색으로 설정
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 404 텍스트 그리기
    ctx.font = 'bold 120px Arial';
    ctx.fillStyle = '#e5e7eb';
    ctx.textAlign = 'center';
    ctx.fillText('404', canvas.width / 2, canvas.height / 2);
    
    // 추가 텍스트
    ctx.font = '24px Arial';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('페이지를 찾을 수 없습니다', canvas.width / 2, canvas.height / 2 + 40);
    ctx.fillText('대신 그림을 그려보세요!', canvas.width / 2, canvas.height / 2 + 80);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 404 텍스트 다시 그리기
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 120px Arial';
    ctx.fillStyle = '#e5e7eb';
    ctx.textAlign = 'center';
    ctx.fillText('404', canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('페이지를 찾을 수 없습니다', canvas.width / 2, canvas.height / 2 + 40);
    ctx.fillText('대신 그림을 그려보세요!', canvas.width / 2, canvas.height / 2 + 80);
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = '404-drawing.png';
    link.href = image;
    link.click();
  };

  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="drawing-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
          
          <div className="controls-container">
            <div className="drawing-tools">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="color-picker"
              />
              <input
                type="range"
                min="1"
                max="20"
                value={lineWidth}
                onChange={(e) => setLineWidth(parseInt(e.target.value))}
                className="line-width-slider"
              />
            </div>
            
            <div className="button-group">
              <button
                onClick={clearCanvas}
                className="clear-button"
              >
                지우기
              </button>
              <button
                onClick={saveDrawing}
                className="save-button"
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;