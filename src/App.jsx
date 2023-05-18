import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import AddToy from "./pages/AddToy";
import AllToys from "./pages/AllToys";
import MyToys from "./pages/MyToys";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="add-toy" element={<AddToy />} />
          <Route path="all-toys" element={<AllToys />} />
          <Route path="my-toys" element={<MyToys />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
