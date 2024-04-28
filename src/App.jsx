import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import DashLayout from "./pages/layout/DashLayout";
import Classes from "./pages/Classes/Classes";
import Teachers from "./pages/Teachers/Teachers";
import Students, {
  loader as studentLoader,
  action as studentAction,
} from "./pages/Students/Students";
import Analytics from "./pages/analytics/Analytics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<DashLayout />}>
        <Route loader={homeLoader} index element={<Home />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route
          loader={studentLoader}
          action={studentAction}
          path='/students'
          element={<Students />}
        />
        <Route path='/analytics' element={<Analytics />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

