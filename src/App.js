import React from "react";

const LK = React.lazy(() => import("appVTBlk/App"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <LK />
    </React.Suspense>
  </div>
);

export default App;
