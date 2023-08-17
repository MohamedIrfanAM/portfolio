'use client'

import { useState, useEffect } from 'react';

export const validateString = (value,maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error) => {
  let message

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

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