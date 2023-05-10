import Design from "./components/Design";
import First from "./First";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
        <div className="w-full h-screen absolute top-0 left-0">
          <div className="ninja">
            <h1>Coding Ninja ToDo list App</h1>
          </div>
          <div className="first">
            {/* Main Logic goes in this Component  */}
            <First />
          </div>
          {/* Desing Logic goes in this Component  */}
          <Design />
        </div>
      </div>
    </>
  );
}

export default App;
