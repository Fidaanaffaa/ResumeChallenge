import React from 'react'
import ReactDOM from 'react-dom/client'
function Hello(props)
{
    return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root =  ReactDom.createRoot(container);
root.render(<Hello />);