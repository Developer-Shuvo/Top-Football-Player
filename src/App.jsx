import "./App.css";
import Header from "./Components/Header/Header";
import Players from "./Components/Player/Players";
import Player from "./Components/Player/Player";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col  md:w-[1320px] mx-auto   ">
        <Header></Header>
        {/* <Main></Main> */}
        <Player></Player>
        {/* <Main></Main> */}
        <Players></Players>
        {/* <Cover></Cover> */}
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
