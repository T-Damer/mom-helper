import { Route, Router, Switch } from 'wouter-preact'
import DetailsPage from 'screens/DetailsPage'
import Main from 'screens/Main'
import AddChild from 'screens/AddChild'
import Diet from 'screens/Diet'
import LoadingDiet from 'screens/LoadingDiet'
import Development from 'screens/Development'

export default function () {
  return (
    <div className="container prose mx-auto min-h-dvh p-5 md:p-10">
      <Router base="/mom-helper">
        <Switch>
          <Route
            path="/patient/:childId"
            component={({ params }) => <DetailsPage {...params} />}
          />
          <Route
            path="/diet/:childId"
            component={({ params }) => <Diet {...params} />}
          />
          <Route
            path="/loadingDiet/:childId"
            component={({ params }) => <LoadingDiet {...params} />}
          />
          <Route
            path="/development/:childId"
            component={({ params }) => <Development {...params} />}
          />

          <Route path="/add" component={AddChild} />

          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  )
}
