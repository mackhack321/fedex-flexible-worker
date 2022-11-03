import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="grid place-items-center">
        <div className="w-full lg:w-2/3 3xl:w-1/3 px-10 lg:px-0">
          Hello world
        </div>
      </main>
    </div>
  );
}

export default App;
