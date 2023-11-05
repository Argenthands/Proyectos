import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById("app")

const root = ReactDOM.createRoot(appDomElement)

const button1 = React.createElement('button', {"class" : "btn", "data-id" : 123}, '[1] Click me!')
const button2 = React.createElement('button', {"class" : "btn", "data_id" : 456}, '[2] Click me!')
const button3 = React.createElement('button', {"class" : "btn", "data-1d" : 789}, '[3] Click me!')
const div = React.createElement('div', null, [button1, button2, button3])
root.render(div)
