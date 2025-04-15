import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { Directions, StartFrom, Mode } from './utils';
import { useState } from "react";

const App = () => {
    const [direction, setDirection] = useState(Directions.TopToBottom);
    const [startFrom, setStartFrom] = useState(StartFrom.UpperLeft);
    const [mode, setMode] = useState(Mode.S);
    const [rows, setRows] = useState(4);
    const [columns, setColumns] = useState(4);

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
            <AppHeader setDirection={setDirection} setStartFrom={setStartFrom} setMode={setMode} setRows={setRows} setColumns={setColumns}/>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <AppContent rows={rows} columns={columns} direction={direction} startFrom={startFrom} mode={mode}/>
            </div>
        </div>
    )
}

export default App;