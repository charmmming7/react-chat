/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import List from './pages/List';
import Room from './pages/Room';
import './assets/scss/common/_reset.scss';
import './assets/scss/common/_common.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/room/:1" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
