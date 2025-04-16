import PixelColumn from "./PixelColumn.tsx";
import PixelRow from "./PixelRow.tsx";
import {Directions, StartFrom} from  "./utils.ts";

interface PixelArtProps {
    direction: Directions;
    startFrom: StartFrom;
    rows: number;
    columns: number;
    pixelControl: number[];
    r: number[];
    g: number[];
    b: number[];
    setPixelControl: (data: number[]) => void;
    setR: (data: number[]) => void;
    setG: (data: number[]) => void;
    setB: (data: number[]) => void;
}

const PixelGridZ = (props: PixelArtProps) => {
    return (
        <>
            {props.direction === Directions.TopToBottom && props.startFrom === StartFrom.UpperLeft && <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                {Array.from({ length: props.columns }, (_, colIndex) => (
                    <PixelColumn
                        key={colIndex}
                        startIndex={colIndex * props.rows}
                        rows={props.rows}
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                ))}
            </div>}

            {props.direction === Directions.TopToBottom && props.startFrom === StartFrom.UpperRight && <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            {Array.from({ length: props.columns }, (_, i) => {
                const colIndex = props.columns - 1 - i; // reverse column order
                const startIndex = colIndex * props.rows;     // same index logic, but reversed visually
                return (
                    <PixelColumn
                        key={colIndex}
                        startIndex={startIndex}
                        rows={props.rows}
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                );
                })}

            </div>}

            {props.direction === Directions.BottomToTop && props.startFrom === StartFrom.LowerLeft && <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            {Array.from({ length: props.columns }, (_, i) => {
                const colIndex = props.columns - 1 - i; // Left to right
                const startIndex = i * props.rows;     // index goes normally (0, 4, 8...)
                return (
                    <PixelColumn
                        key={colIndex}
                        startIndex={startIndex}
                        rows={props.rows}
                        bottomToTop
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                );
                })}

            </div>}

            {props.direction === Directions.BottomToTop && props.startFrom === StartFrom.LowerRight && <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            {Array.from({ length: props.columns }, (_, i) => {
                const colIndex = props.columns - 1 - i;
                const startIndex = colIndex * props.rows;
                return (
                    <PixelColumn
                        key={colIndex}
                        startIndex={startIndex}
                        rows={props.rows}
                        bottomToTop
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                );
                })}
            </div>}

            {props.direction === Directions.LeftToRight && props.startFrom === StartFrom.UpperLeft && <div>
            {Array.from({ length: props.rows }, (_, i) => {
                return (
                    <PixelRow
                        key={i}
                        startIndex={i * props.columns}
                        columns={props.columns}
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                )
                })}   
            </div>} 

            {props.direction === Directions.LeftToRight && props.startFrom === StartFrom.LowerLeft && <div>
            {Array.from({ length: props.rows }, (_, i) => {
                const rowIndex = props.rows - i - 1;
                const startIndex = rowIndex * props.columns;
                return (
                    <PixelRow
                        key={rowIndex}
                        startIndex={startIndex}
                        columns={props.columns}
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                )
                })}  
            </div>}

            {props.direction === Directions.RightToLeft && props.startFrom === StartFrom.UpperRight && <div>
            {Array.from({ length: props.rows }, (_, i) => {
                return (
                    <PixelRow
                        key={i}
                        startIndex={i * props.columns}
                        columns={props.columns}
                        rightToLeft
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                )
                })}      
            </div>} 

            {props.direction === Directions.RightToLeft && props.startFrom === StartFrom.LowerRight && <div>
            {Array.from({ length: props.rows }, (_, i) => {
                const rowIndex = props.rows - i - 1;
                const startIndex = rowIndex * props.columns;
                return (
                    <PixelRow
                        key={rowIndex}
                        startIndex={startIndex}
                        columns={props.columns}
                        rightToLeft
                        pixelControl={props.pixelControl}
                        r={props.r} 
                        g={props.g} 
                        b={props.b}
                        setPixelControl={props.setPixelControl}
                        setR={props.setR}
                        setG={props.setG}
                        setB={props.setB}
                    />
                )
                })}      
            </div>} 
        </>
    )
}

export default PixelGridZ;