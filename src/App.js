import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route render={()=><p>Page not found 404!</p>}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
