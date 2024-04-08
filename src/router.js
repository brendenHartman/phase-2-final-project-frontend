import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TeamList from "./components/TeamList";
import MyTeam from "./components/MyTeam";
import Alert from "./components/Alert";
import Error from "./components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/teams",
        element: <TeamList />,
        errorElement: <Error />
    },
    {
        path: "/myTeam",
        element: <MyTeam />,
        errorElement: <Error />
    },
    {
        path: "/successMessage",
        element: <Alert />,
        errorElement: <Error />
    }
]);


export default router;