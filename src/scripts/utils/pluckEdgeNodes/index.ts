import * as R from 'ramda';

type Edge = {
  node: unknown;
};

type EdgeContainer = {
  edges: Edge[];
};

/**
 * Takes an object that contains a list of edges which each contain a node.
 * Returns a list of the value of each node
 * @param {Object} obj
 * @param {Object[]} obj.edges - A list of literal edge objects
 * @param {Object} obj.edges[].node - Should contain the data we want to pluck
 * @returns Returns an array of the contents of each edge node
 */
export const pluckEdgeNodes = R.pipe(
  (edgeContainer: EdgeContainer) => edgeContainer.edges,
  (edges: Edge[]) => R.pluck(`node`, edges),
);
