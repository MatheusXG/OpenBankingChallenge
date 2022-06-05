import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import Nav from './Nav'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Nav />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)