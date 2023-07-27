import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//importok a reactQuery-hez
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

//egy kliens kezelő inicializálása
const qClient = new QueryClient()

//egy QueryClientProvider-rel körbe kell venni az alkalmazást, hogy működjön a reactQuery. 
//A client-et meg kell adni, ami az előbb inicializált kezelő lesz.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client = {qClient}> 
      <App />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>,
)
