import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import theme from './theme';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CircularProgress } from '@mui/material';
import { ToastProvider } from 'react-toast-notifications';

const Loading = () => {
  return (
    <div style={{ position: "fixed", top: '50%', left: '50%' }}>
      <CircularProgress disableShrink color='primary' />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastProvider placement="bottom-right" autoDismiss autoDismissTimeout={3000}>
      <ThemeProvider theme={theme} >
        <Suspense fallback={<Loading />}>
          <CssBaseline />
          <App />
        </Suspense>
      </ThemeProvider>
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
