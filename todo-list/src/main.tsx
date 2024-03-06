import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import App from './app.tsx'
import './index.css'

// eslint-disable-next-line unicorn/prefer-query-selector
ReactDOM.createRoot(document.getElementById('root')!).render(<Provider store={store}>
  <App />
</Provider>)
