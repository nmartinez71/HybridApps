import { useState, useEffect } from "react";

export default function useVisibility(initialItems) {
  const [visibility, setVisibility] = useState({});

  useEffect(() => {
    
    const initialVisibility = initialItems.reduce((acc, item) => {
      acc[item.uid] = true; 
      return acc;
    }, {});
    setVisibility(initialVisibility);
  }, [initialItems]); 

  const hideItem = (uid) => {
    setVisibility((prevState) => ({
      ...prevState,
      [uid]: false, 
    }));
  };

  const resetVisibility = () => {
    setVisibility((prevState) => {
      const updatedVisibility = {};
      Object.keys(prevState).forEach((key) => {
        updatedVisibility[key] = true; 
      });
      return updatedVisibility;
    });
  };

  return { visibility, hideItem, resetVisibility };
}
