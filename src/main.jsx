import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import RouterProvider
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
// import auth provider
import Provider from './provider/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* use auth provider */}
    <Provider>
      {/* use react router */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
