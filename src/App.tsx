import TuneInScreen from "./screens/TuneInScreen";

function App() {
  return <TuneInScreen onTuneIn={() => console.log("Tune in clicked")} />;
}

export default App;