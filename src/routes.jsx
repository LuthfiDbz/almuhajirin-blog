import React from "react";

const routes = [
  {
    element: React.lazy(() => import("./pages/Home")),
    path: "/",
    // isValid: true
  },
]

export default routes;