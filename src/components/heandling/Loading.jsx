import { Outlet } from "react-router-dom";


export default function Loading() {
  return (
    <>
        <p>Loading...</p>
        <Outlet />
    </>
  )
}
