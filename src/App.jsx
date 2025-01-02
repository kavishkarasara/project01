import React from "react";
import Lower from "./Components/lower/Lower";
import Upper from "./Components/Upper/Upper";

function App() {
  return (
    <>
      <section className="flex flex-col gap-6 p-4">
        <Upper />
        <Lower />
      </section>
    </>
  );
}

export default App;
