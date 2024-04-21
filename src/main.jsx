import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";
import store from './state/store.js';
import theme from './theme/theme.js';
import router from './routes/router.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
