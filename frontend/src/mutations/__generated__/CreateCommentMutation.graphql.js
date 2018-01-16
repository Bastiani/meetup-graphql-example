/**
 * @flow
 * @relayHash 41d003df79e8a35704cb1985a3d0cd88
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateCommentMutationVariables = {|
  postId: string;
  content: string;
|};
export type CreateCommentMutationResponse = {|
  +createComment: ?{|
    +id: string;
    +postId: ?string;
    +content: ?string;
  |};
|};
*/


/*
mutation CreateCommentMutation(
  $postId: ID!
  $content: String!
) {
  createComment(postId: $postId, content: $content) {
    id
    postId
    content
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "postId",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "content",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCommentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId",
            "type": "ID!"
          }
        ],
        "concreteType": "Comment",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "postId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateCommentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "postId",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "content",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateCommentMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId",
            "type": "ID!"
          }
        ],
        "concreteType": "Comment",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "postId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateCommentMutation(\n  $postId: ID!\n  $content: String!\n) {\n  createComment(postId: $postId, content: $content) {\n    id\n    postId\n    content\n  }\n}\n"
};

module.exports = batch;
