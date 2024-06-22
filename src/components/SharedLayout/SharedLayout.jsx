import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import Loader from "../Loader/Loader"


function SharedLayuot() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback= {<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default SharedLayuot;