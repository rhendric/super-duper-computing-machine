import React, { useEffect } from 'react';

let unmountCount = 0;
let renderCount = 0;
const MountCounter = ({ prop }) => {
  renderCount++;
  useEffect(() => () => unmountCount++, []);
  return <p>renderCount = {renderCount}, unmountCount = {unmountCount}, prop = {prop}</p>;
};

export default MountCounter;
