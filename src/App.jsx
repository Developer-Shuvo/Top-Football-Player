import "./App.css";
import Header from "./Components/Header/Header";
import Cover from "./Components/Cover/Cover";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
    <div className="flex flex-col  md:w-[1320px] mx-auto   ">
  <Header></Header>
  <Main></Main>
  {/* <Cover></Cover> */}

    </div>
    </>
  );
}

export default App;
