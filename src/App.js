import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";

const App = () => {
  return (
    // <Suspense fallback={<LoadingSpinner size="large" />}>
    <Suspense>
      <BrowserRouter>
        <Routes>
          {routes?.map((el, idx) => (
            <Route
              key={idx}
              path={el.path}
              element={
                <el.element
                  useEffect={useEffect}
                  useState={useState}
                />
              }
            />
          ))}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
