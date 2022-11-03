import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center">
        <div className="h-full min-h-screen w-full lg:w-2/3 3xl:w-1/3">
          Hello world
        </div>
      </div>
    </div>
  );
}

export default App;
