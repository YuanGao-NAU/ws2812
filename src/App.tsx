import PixelGridZ from './PixelGridZ';
import {Directions, StartFrom} from  "./utils.ts";

function App() {

  return (
    <>
      {/* <PixelArt direction={Directions.LeftToRight} startFrom={StartFrom.LowerLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.LeftToRight} startFrom={StartFrom.UpperLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.RightToLeft} startFrom={StartFrom.LowerLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.RightToLeft} startFrom={StartFrom.UpperLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.TopToBottom} startFrom={StartFrom.UpperLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.TopToBottom} startFrom={StartFrom.UpperRight} rows={4} columns={4} />
      <PixelArt direction={Directions.BottomToTop} startFrom={StartFrom.UpperLeft} rows={4} columns={4} />
      <PixelArt direction={Directions.BottomToTop} startFrom={StartFrom.UpperRight} rows={4} columns={4} /> */}

        <PixelGridZ rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperLeft} />
        <PixelGridZ rows={4} columns={8} direction={Directions.TopToBottom} startFrom={StartFrom.UpperRight} />
        <PixelGridZ rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerLeft} />
        <PixelGridZ rows={4} columns={8} direction={Directions.BottomToTop} startFrom={StartFrom.LowerRight} />
        <PixelGridZ rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.UpperLeft} />
        <PixelGridZ rows={4} columns={8} direction={Directions.LeftToRight} startFrom={StartFrom.LowerLeft} />
        <PixelGridZ rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.UpperRight} />
        <PixelGridZ rows={4} columns={8} direction={Directions.RightToLeft} startFrom={StartFrom.LowerRight} />
    </>
  )
}

export default App;
