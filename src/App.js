//очень важно импортировать файл!! в каждый компонент
import React from "react";
import paintingData from "./paintings.json";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
// ОДИН ФАЙЛ - ОДИН КОМПОНЕНЕТ

//компоненты называем с большой буквы
const App = () => {
  return (
    <div>
      <h1>Главныйй компонент</h1>
      <Panel title="this is title">
        <p>Heloo</p>
      </Panel>

      <Panel title="this is title">
        <p>Heloo</p>
        <p>lorem1fdsfsdfdsfdfdsfdssdfsdfsd </p>
      </Panel>

      <PaintingList paintingData={paintingData} />
    </div>
  );
};

export default App;
