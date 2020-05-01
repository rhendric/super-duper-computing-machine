import React from 'react';
import ReactDOM from 'react-dom';

import MountCounter from './MountCounter';

ReactDOM.render(
  <React.StrictMode>
    <MountCounter prop="something to edit" />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
