'use client'

import { useState, useEffect } from 'react';

function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  return windowWidth
}

export const getNumberofCols = () => {
  let width = WindowWidth()
  let cols;
  let rows;
  if(width < 568){
    cols = 2; 
    rows = 2;
  }
  else if(width < 768){
    cols = 3;
    rows = 2;
  }
  else if(width < 1034){
    cols = 2;
    rows = 3;
  }
  else if(width < 1306){
    cols = 3;
    rows = 3;
  }
  else{
    cols = 4;
    rows = 3;
  }
  return {
    cols:cols,
    rows:rows
  }
}

export const getNumberofSlides = () => {
  let width = WindowWidth()
  let slides;
  if(width < 568){
    slides = 1;
  }
  else if(width < 768){
    slides = 2;
  }
  else if(width < 1034){
    slides = 3;
  }
  else if(width < 1306){
    slides = 4;
  }
  else{
    slides = 5;
  }
  return slides
}