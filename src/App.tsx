import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { Layout } from "antd";
import { Directions, StartFrom, Mode } from './utils';
import { useState } from "react";

const App = () => {
    const [direction, setDirection] = useState(Directions.TopToBottom);
    const [startFrom, setStartFrom] = useState(StartFrom.UpperLeft);
    const [mode, setMode] = useState(Mode.S);

    return (<Layout style={{ height: '100vh' }}>
        <AppHeader setDirection={setDirection} setStartFrom={setStartFrom} setMode={setMode}/>
        <AppContent rows={4} columns={4} direction={direction} startFrom={startFrom} mode={mode}/>
    </Layout>
    )
}

export default App;