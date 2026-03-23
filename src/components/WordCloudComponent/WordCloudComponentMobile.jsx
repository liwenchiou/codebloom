import React, { useEffect, useRef } from 'react';
import WordCloud from 'wordcloud';
import { useToast } from "../Toast/ToastContext";

const WordCloudComponent = ({ data }) => {
  const { showToast } = useToast();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    // 繪製文字雲函數
    const drawCloud = () => {
      if (!canvas || !container) return;

      // 設定 Canvas 大小 (RWD)
      canvas.width = container.offsetWidth;
      canvas.height = 300;

      WordCloud(canvas, {
        list: data,
        gridSize: 10,
        weightFactor: (size) => {
          return canvas.width > 500 ? size * 1.8 : size * 1.0;
        },
        fontFamily: '"Noto Sans TC", sans-serif',
        backgroundColor: 'transparent', // 改為透明
        color: () => {
          // 使用亮色系以配合深色背景
          const colors = ['#4EDCF1', '#BAF1FA', '#5D6064', '#B4B5B7'];
          return colors[Math.floor(Math.random() * colors.length)];
        },
        rotateRatio: 0.3,
        rotationSteps: 2,
        shape: 'circle',
        click: (item) => {
          if (item) {
            showToast(`你點擊了技術標籤: ${item[0]} (熱門度: ${item[1]})`, "info");
          }
        },
        hover: (item) => {
          canvas.style.cursor = item ? 'pointer' : 'default';
        },
      });
    };

    // 初始繪製
    drawCloud();

    // Resize 處理 (Debounce)
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawCloud, 200);
    };

    window.addEventListener('resize', handleResize);

    // 清除監聽器，防止記憶體洩漏
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [data, showToast]); // 當數據改變時重新繪製

  return (
    <div ref={containerRef} className="popular-tech w-100">
      <canvas ref={canvasRef} id="word-cloud-canvas" />
    </div>
  );
};

export default WordCloudComponent;