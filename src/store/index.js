import React from 'react'

import {
    Provider,
    connect,
    actions,
    subscribe,
    unsubscribe
} from './store'

const wrapWithProvider = ({ element }) => <Provider>{ element }</Provider>

export {
    Provider,
    connect,
    actions,
    subscribe,
    unsubscribe,
    wrapWithProvider
}
