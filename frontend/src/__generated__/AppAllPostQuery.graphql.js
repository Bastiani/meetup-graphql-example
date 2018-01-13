/**
 * @flow
 * @relayHash 6c5a2583f326b8976deace3d23c0e604
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppAllPostQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: string;
    +title: ?string;
    +content: ?string;
  |}>;
|};
*/


/*
query AppAllPostQuery {
  posts {
    id
    title
    content
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllPostQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "name": "posts",
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
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppAllPostQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppAllPostQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "name": "posts",
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
  "text": "query AppAllPostQuery {\n  posts {\n    id\n    title\n    content\n  }\n}\n"
};

module.exports = batch;
