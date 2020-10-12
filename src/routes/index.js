import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import AssetsFiltered from './AssetsFiltered'
import { store } from '../store'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const globalState = useContext(store)
  const { treatments = [], vaccines = [] } = globalState && globalState.state
  const tAndV = [...treatments, ...vaccines]
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <AssetsFiltered assets={vaccines} title='Vaccines' />}
      />
      <Route
        path={'/treatments'}
        render={() => <AssetsFiltered assets={treatments} title='Treatments' />}
      />
      <Route
        path={'/vt'}
        render={() => (
          <AssetsFiltered assets={tAndV} title='Vaccines and Treatments' />
        )}
      />
      <Route path={'/'} render={() => <AssetsFiltered assets={vaccines} />} />
    </Switch>
  )
}

export default Routes
