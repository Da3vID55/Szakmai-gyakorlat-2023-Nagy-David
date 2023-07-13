import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user.tsx'
import themeReducer from './features/theme.tsx'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
