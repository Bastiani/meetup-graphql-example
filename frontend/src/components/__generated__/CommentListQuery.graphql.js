/**
 * @flow
 * @relayHash a86ad83eb288a976b9fe9e2c59ee0c6c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CommentListQueryResponse = {|
  +comments: ?$ReadOnlyArray<?{|
    +id: string;
    +postId: ?string;
    +content: ?string;
  |}>;
|};
*/


/*
query CommentListQuery(
  $postId: String!
) {
  comments(postId: $postId) {
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
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentListQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId",
            "type": "String"
          }
        ],
        "concreteType": "Comment",
        "name": "comments",
        "plural": true,
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
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CommentListQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "postId",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CommentListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "postId",
            "variableName": "postId",
            "type": "String"
          }
        ],
        "concreteType": "Comment",
        "name": "comments",
        "plural": true,
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
  "text": "query CommentListQuery(\n  $postId: String!\n) {\n  comments(postId: $postId) {\n    id\n    postId\n    content\n  }\n}\n"
};

module.exports = batch;
