import React, { useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";
import './App.css';
import { SketchPicker } from "react-color";

function App() {

  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [thick, setThick] = useState('2');

  const Save = () => {
    const data = canvasRef.current.getSaveData();
    console.log(data);
  }

  const Clear = () => {
    canvasRef.current.clear();
  }

  const Undo = () => {
    canvasRef.current.undo();
  }

  return ( 
    <>
      <header className='header'>
        React-Canvas-Draw
      </header>
      <div className='container'>
        <div className='btn'>
          <button onClick={Save}>保存</button>
          <button onClick={Clear}>削除</button>
          <button onClick={Undo}>前に戻る</button>
          <label className='thick'>太く</label>
          <input type='number' value={thick} onChange={e => setThick(parseInt(e.target.value, 10))}></input>
          <SketchPicker
          color={color}
          onChangeComplete={ (color) => { setColor(color.hex) } }
          />
        </div>
        <CanvasDraw 
          brushRadius={thick}
          hideGrid={true}
          style={{border: '1px solid black'}}
          canvasHeight={600}
          canvasWidth={600}
          ref={canvasRef}
          lazyRadius={1}
          brushColor={color}
        />
      </div>
    </>
  );
}

export default App;
