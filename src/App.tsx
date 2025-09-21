import AddChild from 'screens/AddChild'
import DetailsPage from 'screens/DetailsPage'
import Development from 'screens/Development'
import Diet from 'screens/Diet'
import Main from 'screens/Main'
import SpecialistsPage from 'screens/SpecialistsPage'
import VacPage from 'screens/VacPage'
import Weaning from 'screens/Weaning'
import { Route, Router, Switch } from 'wouter-preact'

export default function () {
  return (
    <div className="prose container mx-auto min-h-dvh p-5 md:p-10">
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
            path="/weaning/:childId"
            component={({ params }) => <Weaning {...params} />}
          />
          <Route
            path="/development/:childId"
            component={({ params }) => <Development {...params} />}
          />
          <Route
            path="/vac/:childId"
            component={({ params }) => <VacPage {...params} />}
          />
          <Route
            path="/specialists/:childId"
            component={({ params }) => <SpecialistsPage {...params} />}
          />

          <Route path="/add" component={AddChild} />

          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  )
}
