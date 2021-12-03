import "./App.css";
import AudioList from "./components/AudioList";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App m-20">
      <Header />
      <AudioList />
      <Drawer />
    </div>
  );
}

export default App;
