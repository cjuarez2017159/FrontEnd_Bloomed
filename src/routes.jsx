import { App } from "./App"
import { Login,Home,Navbar } from "./components"
import Foro from "./components/foro"

const routes = [
    {path: '/auth', element: <Login/>},
    {path: '/', element: <Login/>},
    {path: '/main', element: <Home/>},
    {path: '/foro', element: <Foro/>}

]

export default routes