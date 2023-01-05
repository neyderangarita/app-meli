import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MeliApp } from './app/ui/MeliApp'
import { Provider } from 'react-redux'
import './styles.css'
import { store } from './app/infrastucture/driven-adapter/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <MeliApp/>
            </Provider>
        </BrowserRouter>,
    </React.StrictMode>
)
