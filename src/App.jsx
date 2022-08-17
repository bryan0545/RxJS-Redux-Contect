import "./App.css";
import Component1 from "./components/RxJS/Component1";
import Component2 from "./components/RxJS/Component2";
import Page1 from "./pages/example/Page1";
import { Provider } from "react-redux";
import { ExampleStore } from "./redux/store";
import ComponentRedux1 from "./components/RxJS/redux/ComponentRedux1";

function App() {
  return (
    <div className="App">
      <Provider store={ExampleStore}>
        <h2>RxJS</h2>
        <Component1 />
        <Component2 />
        <hr />
        <h2>Context</h2>
        <Page1 />
        <hr />
        <h2>Redux</h2>
        <ComponentRedux1 />
      </Provider>
    </div>
  );
}

export default App;
