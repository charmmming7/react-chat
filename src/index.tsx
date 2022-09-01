// /* eslint-disable @typescript-eslint/no-non-null-assertion */
// import React, {useEffect} from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { socket, SocketContext } from "./service/socket";
// import List from './pages/List';
// import Room from './pages/Room';
// import './assets/scss/common/_reset.scss';
// import './assets/scss/common/_common.scss';
// import './index.css';

// const container = document.getElementById('root')!;
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//       <Routes>
//         <Route path="/" element={<List />}></Route>
//         <Route path="/list" element={<List />}></Route>
//         <Route path="/room/:1" element={<Room />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const container = document.getElementById('root')!;
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
