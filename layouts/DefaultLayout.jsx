import { Outlet } from "react-router";
import Header from "../src/componets/header";
import Footer from "../src/componets/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
