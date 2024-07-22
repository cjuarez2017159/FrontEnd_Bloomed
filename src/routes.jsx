import { App } from "./App"
import { Login } from "./components/Login"

const routes = [
    {path: '/auth', element: <Login/>},
    {path: '/', element: <Login/>}
]

export default routes