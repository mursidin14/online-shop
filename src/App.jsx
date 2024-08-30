import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import UserContextProvider from "./context/UserContext";
import { Suspense } from "react";
import LoadScreen from "./components/loads/LoadScreen";


function App() {

  return (
      <UserContextProvider>
        <Suspense fallback={<LoadScreen />}>
          <RouterProvider router={router} />
        </Suspense>
      </UserContextProvider>
  )
}

export default App
