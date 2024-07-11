import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React, { Suspense } from "react";
import Loader from "../Loader/Loader"

const SharedLayuot = () => {
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