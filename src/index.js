import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.module.css';
import { Home } from './pages/home/home.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Home />);

reportWebVitals();