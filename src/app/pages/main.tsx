import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

export function main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
