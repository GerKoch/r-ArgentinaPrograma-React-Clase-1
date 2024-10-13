import React from "react";
import ReactDOM from "react-dom";
import { Card } from './components/Tarea1.js';
import Tareas from './components/Tarea.js';

// ReactDOM.render(
//     <Card
//         nombre="Germán Koch"
//         titulo="Programador Front End"
//         imagen="https://avatars.githubusercontent.com/u/98907572?s=400&u=d8f4dc96b6fcb31830786ed620160f8a800de205&v=4"
//     />,
//     document.getElementById('root')
// );

ReactDOM.render(<Tareas />, document.getElementById('root'));