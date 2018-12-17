import * as R from 'ramda'

/**
 * Takes an object that contains a list of edges which each contain a node.
 * Returns a list of the value of each node
 * @param {Object} obj
 * @param {Object[]} obj.edges - A list of literal edge objects
 * @param {Object} obj.edges[].node - Should contain the data we want to pluck
 * @returns {any[]} - Returns an array of the contents of each edge node
 */
const pluckEdgeNodes = R.pipe(
    R.prop('edges'),
    R.pluck('node')
)
export default pluckEdgeNodes
