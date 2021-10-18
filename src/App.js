import './App.css';
import { useState } from 'react';
import ThemeContext from "./Components/Context/ThemeContext";
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListedProducts from "./Components/Products/ListedProducts"
import ProductDetail from './Components/Products/ProductDetail';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const styles = {
    containerStyles: {
      backgroundColor: darkMode === true ? "black" : "white",
      height: "100vh",
    },
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div style={styles.containerStyles}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ListedProducts} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route>404 Not Found!</Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
