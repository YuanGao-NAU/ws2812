import {useState} from 'react';
import Pixel from './Pixel';

interface PixelColumnProps {
    startIndex: number;
    rows: number;
    bottomToTop?: boolean;
  }
  
  const PixelColumn = ({ startIndex, rows, bottomToTop = false }: PixelColumnProps) => {
    const pixels = Array.from({ length: rows }, (_, i) => (
      <Pixel key={i} index={startIndex + i} />
    ));
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {bottomToTop ? pixels.reverse() : pixels}
      </div>
    );
  };

export default PixelColumn;