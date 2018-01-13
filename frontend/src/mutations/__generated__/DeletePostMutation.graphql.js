/**
 * @flow
 * @relayHash 8db47896c5148865156320cc8616f6ce
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeletePostMutationVariables = {|
  id: string;
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?string;
|};
*/


/*
mutation DeletePostMutation(
  $id: ID!
) {
  deletePost(id: $id)
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeletePostMutation",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "name": "deletePost",
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeletePostMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeletePostMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "name": "deletePost",
        "storageKey": null
      }
    ]
  },
  "text": "mutation DeletePostMutation(\n  $id: ID!\n) {\n  deletePost(id: $id)\n}\n"
};

module.exports = batch;
