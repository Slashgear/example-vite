import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { random } from 'lodash-es'
import useDarkMode from 'use-dark-mode'

import './index.css'

window.global = window;

const Greet = () => <h1>Hello, world !</h1>

const Content = React.lazy(() => import('./lazy'))

const Page = () => {
    const darkMode = useDarkMode()

    return (<main>
        <button type="button" name="toggleDarkMode" onClick={darkMode.toggle} >Toggle dark mode</button>
        <Greet/>
        <Suspense fallback={<span>Loading...</span>}>
            <Content/>
            <span>{random()}</span>
        </Suspense>
    </main>)
}

const rootElement = document.getElementById("app");
ReactDOM.render(
    <StrictMode>
        <Page />
    </StrictMode>,
    rootElement
);