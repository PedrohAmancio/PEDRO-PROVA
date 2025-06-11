import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./Pages/Home";
import CadastrarUsuario from "./Pages/CadastrarUsuario";
import CadastrarTarefa from "./Pages/CadastrarTarefa";
import EditarTarefa from "./Pages/EditarTarefa";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                 path:"/",
                element: <Home />,
            },
            {
                 path:"/home",
                element: <Home />,
            },
            {
                 path:"/cadastrarusuario",
                element: <CadastrarUsuario />,
            },
            {
                 path:"/cadastrartarefa",
                element: <CadastrarTarefa />,
            },
            {
                 path:"/editartarefa/:id",
                element: <EditarTarefa />,
            }
        ]
    }
])
export default router;