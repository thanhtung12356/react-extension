import React from 'react'
import { createRoot } from 'react-dom/client';
import './popup.css'
const test = <img src="icon.png"></img>;
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
const root = createRoot(rootElement);
root.render(test);

