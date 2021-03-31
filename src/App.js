//очень важно импортировать файл!! в каждый компонент
import React from 'react';
import paintingData from './paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';

import Layout from './components/Layout/Layout';
// ОДИН ФАЙЛ - ОДИН КОМПОНЕНЕТ

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

//компоненты называем с большой буквы
const App = () => {
  return (
    //React.Fragment что бы не создавать лишний див. этот сразу растворяется в разметке.
    //можно испольховать просто пустой тег
    <Layout>
      <ColorPicker options={colorPickerOptions} />
      <h1>Главныйй компонент</h1>
      <Panel title="this is title">
        <p>Heloo</p>
      </Panel>

      <Panel title="this is title">
        <p>Heloo</p>
        <p>lorem1fdsfsdfdsfdfdsfdssdfsdfsd </p>
      </Panel>

      <Notification text="Everything is OK" type="succes" />
      <Notification text="An Error occured" type="error" />

      <PaintingList paintingData={paintingData} />
    </Layout>
  );
};

export default App;
