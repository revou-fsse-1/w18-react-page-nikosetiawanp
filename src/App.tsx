import { useState } from "react";
import "./App.css";

import GalleryPage from "./components/GalleryPage";

function App() {
  const [count, setCount] = useState(0);

  return <GalleryPage />;
}

export default App;
