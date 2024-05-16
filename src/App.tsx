import { Route, Router, Switch } from 'wouter-preact'
import DetailsPage from 'screens/DetailsPage'
import Main from 'screens/Main'
import AddChild from 'screens/AddChild'

export default function () {
  return (
    <div className="container prose mx-auto p-5 md:p-10">
      <Router base="/mom-helper">
        <Switch>
          <Route
            path="/patient/:name"
            component={({ params }) => <DetailsPage {...params} />}
          />
          <Route path="/add" component={AddChild} />
          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  )
}
