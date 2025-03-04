import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store, persistor} from './redux/store.js'
import { Provider} from 'react-redux' //makes your Redux store available to all components
import { PersistGate } from 'redux-persist/integration/react'//delays the rendering of your app until the persisted state has been rehydrated (loaded back from storage) and app doesn't render until persisted data is available in  or ully loaded from storg like localstorege
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </Provider>,
  </PersistGate>
)
