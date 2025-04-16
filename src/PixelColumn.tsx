import Pixel from './Pixel';

interface PixelColumnProps {
    startIndex: number;
    rows: number;
    bottomToTop?: boolean;
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
  }
  
  const PixelColumn = ({pixelControl, r, g, b, setPixelControl, setR, setG, setB, startIndex, rows, bottomToTop = false }: PixelColumnProps) => {
    const pixels = Array.from({ length: rows }, (_, i) => (
      <Pixel 
        key={i + startIndex} 
        index={startIndex + i} 
        pixelControl={pixelControl}
        r={r} 
        g={g} 
        b={b}
        setPixelControl={setPixelControl}
        setR={setR}
        setG={setG}
        setB={setB}
      />
    ));
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {bottomToTop ? pixels.reverse() : pixels}
      </div>
    );
  };

export default PixelColumn;