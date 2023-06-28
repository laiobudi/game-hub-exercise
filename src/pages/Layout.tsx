import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => (
	<>
		<NavBar />
		<Outlet />
	</>
);

export default Layout;
