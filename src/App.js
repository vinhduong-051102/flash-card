import Content from "./components/Content";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
