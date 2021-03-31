import Navbar from "./components/Navbar";
import Component from "./components/Component";
import Data from "./Data";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      {Data.map((element) => {
        return (
          <Component
            key={element.id}
            img_url={element.img}
            heading={element.heading}
            sub_heading={element.date}
            desc={element.description}
            
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
