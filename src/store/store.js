import createStore from 'react-waterfall'

import initialState from './state'
import actionsCreators from './actions'

const config = {
    initialState,
    actionsCreators
}

const {
    Provider,
    connect,
    actions,
    subscribe,
    unsubscribe
} = createStore(config)

export {
    Provider,
    connect,
    actions,
    subscribe,
    unsubscribe
}
