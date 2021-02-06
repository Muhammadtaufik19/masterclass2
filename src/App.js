import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./components/Todos";
import Form from "./components/Form";
// import Test from "./components/Test";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Belajar redux</h1>
            <Todos />
            <Form />
            {/* <Test /> */}
          </header>
        </div>
      </div>
    </Provider>
  );
}

export default App;
