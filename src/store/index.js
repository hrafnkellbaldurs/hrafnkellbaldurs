import React from 'react'
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

const wrapWithProvider = ({ element }) => <Provider>{ element }</Provider>

export {
    wrapWithProvider,
    Provider,
    connect,
    actions,
    subscribe,
    unsubscribe
}
