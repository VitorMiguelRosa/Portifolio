import FirstComponent from "./components/FirstComponent";
import Header from "./components/Header";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Header />

      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
