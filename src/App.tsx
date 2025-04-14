import './App.css'
import PixelGridZ from './PixelGridZ';
import PixelGridS from './PixelGridS.tsx';
import {Directions, StartFrom} from  "./utils.ts";

function App() {

  return (
    <>
      {/* <PixelGridZ rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperLeft} />
      <PixelGridZ rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperRight} />
      <PixelGridZ rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerLeft} />
      <PixelGridZ rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerRight} />
      <PixelGridZ rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.UpperLeft} />
      <PixelGridZ rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.LowerLeft} />
      <PixelGridZ rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.UpperRight} />
      <PixelGridZ rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.LowerRight} /> */}

      {/* <PixelGridS rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperLeft} />
      <PixelGridS rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperRight} />
      <PixelGridS rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerLeft} />
      <PixelGridS rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerRight} /> */}
      <PixelGridS rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.UpperLeft} />
      <PixelGridS rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.LowerLeft} />
      <PixelGridS rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.UpperRight} />
      <PixelGridS rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.LowerRight} />
    </>
  )
}

export default App;
