import React from 'react';
import { render } from 'react-dom';
import App from './app';

import './sass/style.scss';

// import { rehydrateMarks } from 'react-imported-component';
// import { BrowserRouter } from 'react-router-dom';

// const element = document.getElementById('app');
// const app = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// In production, we want to hydrate instead of render because of the server-rendering
// if (process.env.NODE_ENV === 'production') {
//   // rehydrate the bundle marks
//   rehydrateMarks().then(() => {
//     ReactDOM.hydrate(app, element);
//   });
// } else {
//   ReactDOM.render(app, element);
// }

// Hot reload is that easy with Parcel
// if (module.hot) {
//   module.hot.accept();
// }

render(<App />, document.getElementById('root'));
