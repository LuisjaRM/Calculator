import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Root } from "./Root";
import { Home } from "./pages/Home/Home";
import { Settings } from "./pages/Settings/Settings";

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
