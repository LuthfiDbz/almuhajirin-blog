import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";
import Headers from "./component/header/Header";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

const App = () => {
  return (
    // <Suspense fallback={<LoadingSpinner size="large" />}>
    <Suspense>
      <BrowserRouter>
        <Container className="justify-content-center text-center py-3 bg-primary mx-0 d-flex align-items-center gap-3 w">
          <h5 style={{margin: 0}} className='text-white'>Daftar PPDB? Klik Tombolnya yah</h5>
          <Button variant="outline-light" className="border border-2">Daftar</Button>
        </Container>
        <Headers />
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
