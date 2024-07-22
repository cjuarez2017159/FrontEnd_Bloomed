import { App } from "./App"
import { Login,Home,Navbar } from "./components"
import Foro from "./components/foro"

const routes = [
    {path: '/auth', element: <Login/>},
    {path: '/login', element: <Login/>},
    {path: '/', element: <Home/>},
    {path: '/foro', element: <Foro/>}

]

export default routes