import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <div id="root" className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <main className="main_container flex-grow-1 grey">
          <div className="mycontainer">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blog/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;