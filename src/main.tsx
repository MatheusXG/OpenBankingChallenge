import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import React from 'react'
import Home from './pages/Home/'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Investiments from './pages/Investiments';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="Dashboard" element={<Dashboard />}> </Route>
          <Route path="Investiments" element={<Investiments />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
