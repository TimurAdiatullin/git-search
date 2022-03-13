import "./App.css";
import Footer from "./components/Footer/Footer";
import FunctionBlockConteiner from "./components/FunctionBlock/FunctionBlockConteiner";

const App = (props) => {
   return (
      <div className="wrapper">
         <FunctionBlockConteiner />
         <Footer />
      </div>
   );
};
export default App;
