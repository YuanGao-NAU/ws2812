import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { Directions, StartFrom, Mode } from './utils';
import { useState, useTransition } from "react";
import AppFooter from "./AppFooter";

const App = () => {
    const [direction, setDirection] = useState(Directions.TopToBottom);
    const [startFrom, setStartFrom] = useState(StartFrom.UpperLeft);
    const [mode, setMode] = useState(Mode.S);
    const [rows, setRows] = useState(4);
    const [columns, setColumns] = useState(4);
    const [showPixels, setShowPixels] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [pixelControl, setPixelControl] = useState(new Array(rows * columns).fill(0));
    const [r, setR] = useState(new Array(rows * columns).fill(0));
    const [g, setG] = useState(new Array(rows * columns).fill(0));
    const [b, setB] = useState(new Array(rows * columns).fill(0));

    const handleOnChange = () => {
        startTransition(() => {
            setShowPixels(true);
        })
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
            <AppHeader setDirection={setDirection} setStartFrom={setStartFrom} setMode={setMode} setRows={setRows} setColumns={setColumns} handleOnChange={handleOnChange}/>
            {isPending && <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' // fill screen vertically
                }}>
                <div>Loading Pixel Grid...</div>
            </div>}
            {showPixels && <div style={{ flex: 1, overflowY: 'auto' }}>
                <AppContent 
                    rows={rows} 
                    columns={columns} 
                    direction={direction} 
                    startFrom={startFrom} 
                    mode={mode}
                    pixelControl={pixelControl}
                    r={r} 
                    g={g} 
                    b={b}
                    setPixelControl={setPixelControl}
                    setR={setR}
                    setG={setG}
                    setB={setB}/>
            </div>}
           { !isPending && <AppFooter pixelControl={pixelControl} r={r} g={g} b={b} /> }
        </div>
    )
}

export default App;