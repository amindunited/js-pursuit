import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Questions from '../questions'

const redirectToQuestion = (props) => {
  /**
   * @TODO
   * calculate 'random' question id to use
   */
  const questionId = 666;
  return <Redirect to={'questions/' + questionId} />
}

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/questions/:questionId" component={Questions} />
        <Route exact path="/questions" component={redirectToQuestion} />
      </Switch>
    </main>
  </div>
)

export default App;