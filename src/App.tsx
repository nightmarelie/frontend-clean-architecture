import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth } from "./ui/Auth";
import { User } from "./ui/User";
import { Front } from "./ui/Front";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/user" component={User} />
          <Route path="/" component={Front} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
