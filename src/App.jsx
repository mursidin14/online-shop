import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import UserContextProvider from "./context/UserContext";
import { Suspense } from "react";
import LoadScreen from "./components/loads/LoadScreen";
import ThemeContext from "./context/ThemeContext";


function App() {

  return (
      <ThemeContext>
        <UserContextProvider>
          <Suspense fallback={<LoadScreen />}>
            <RouterProvider router={router} />
          </Suspense>
        </UserContextProvider>
      </ThemeContext>
  )
}

export default App
