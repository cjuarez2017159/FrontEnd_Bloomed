import { useRoutes } from "react-router-dom"
import routes from './routes.jsx'
import { Toaster } from "react-hot-toast";
import 'react-datepicker/dist/react-datepicker.css';


export const App = () => {
  let element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster position="botton-right" reverseOrder={false}/>
    </>
  );
};