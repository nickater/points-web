import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { PointsScreen } from "../screens/Points/PointsScreen";
import { RootScreen } from "../screens/RootScreen/RootScreen";
export const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootScreen />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/points",
        element: <PointsScreen />,
      },
    ],
  },
]);
