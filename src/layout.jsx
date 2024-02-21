import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <p>header</p>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
