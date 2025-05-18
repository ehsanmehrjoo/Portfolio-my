import ReactDOM from 'react-dom/client'
import App from './App'
import { setupI18n } from './i18n'
import './index.css'

setupI18n().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})
