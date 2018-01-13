/**
 * @flow
 * @relayHash 9badb9f59f09a6f0562b63e315927693
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreatePostMutationVariables = {|
  title: string;
  content: string;
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +id: string;
    +title: ?string;
    +content: ?string;
  |};
|};
*/


/*
mutation CreatePostMutation(
  $title: String!
  $content: String!
) {
  createPost(title: $title, content: $content) {
    id
    title
    content
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "title",
        "type": "String!",
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
    "name": "CreatePostMutation",
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
            "name": "title",
            "variableName": "title",
            "type": "String"
          }
        ],
        "concreteType": "Post",
        "name": "createPost",
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
            "name": "title",
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
  "name": "CreatePostMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "title",
        "type": "String!",
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
    "name": "CreatePostMutation",
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
            "name": "title",
            "variableName": "title",
            "type": "String"
          }
        ],
        "concreteType": "Post",
        "name": "createPost",
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
            "name": "title",
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
  "text": "mutation CreatePostMutation(\n  $title: String!\n  $content: String!\n) {\n  createPost(title: $title, content: $content) {\n    id\n    title\n    content\n  }\n}\n"
};

module.exports = batch;
