import { BrowserRouter as Router } from "react-router-dom"
import { Routers } from "./routes/routes"
import { ContextProvider } from "./context/context";
import { Provider } from "react";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routers/>
      </ContextProvider>
    </Router>
  );
}

export default App
