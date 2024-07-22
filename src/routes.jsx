import { App } from "./App"
import { Login,Home, Video } from "./components"
import Foro from "./components/foro"

const routes = [
    {path: '/auth', element: <Login/>},
    {path: '/login', element: <Login/>},
    {path: '/', element: <Home/>},
    {path: '/foro', element: <Foro/>},
    {path: '/videos', element: <Video/>}

]

export default routes