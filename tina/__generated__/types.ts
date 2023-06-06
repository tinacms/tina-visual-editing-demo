//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String'];
  path: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilter>;
};

export type DocumentFilter = {
  page?: InputMaybe<PageFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Page | Folder;

export type PageLogo = {
  __typename?: 'PageLogo';
  url?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PageLinks = {
  __typename?: 'PageLinks';
  header?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Page = Node & Document & {
  __typename?: 'Page';
  header?: Maybe<Scalars['String']>;
  logo?: Maybe<PageLogo>;
  links?: Maybe<Array<Maybe<PageLinks>>>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLogoFilter = {
  url?: InputMaybe<ImageFilter>;
  alt?: InputMaybe<StringFilter>;
};

export type PageLinksFilter = {
  header?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type PageFilter = {
  header?: InputMaybe<StringFilter>;
  logo?: InputMaybe<PageLogoFilter>;
  links?: InputMaybe<PageLinksFilter>;
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};

export type DocumentUpdateMutation = {
  page?: InputMaybe<PageMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
};

export type PageLogoMutation = {
  url?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type PageLinksMutation = {
  header?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageMutation = {
  header?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<PageLogoMutation>;
  links?: InputMaybe<Array<InputMaybe<PageLinksMutation>>>;
};

export type PagePartsFragment = { __typename?: 'Page', header?: string | null, logo?: { __typename: 'PageLogo', url?: string | null, alt?: string | null } | null, links?: Array<{ __typename: 'PageLinks', header?: string | null, description?: string | null, url?: string | null } | null> | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, header?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, logo?: { __typename: 'PageLogo', url?: string | null, alt?: string | null } | null, links?: Array<{ __typename: 'PageLinks', header?: string | null, description?: string | null, url?: string | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilter>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PageConnectionEdges', cursor: string, node?: { __typename?: 'Page', id: string, header?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, logo?: { __typename: 'PageLogo', url?: string | null, alt?: string | null } | null, links?: Array<{ __typename: 'PageLinks', header?: string | null, description?: string | null, url?: string | null } | null> | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  header
  logo {
    __typename
    url
    alt
  }
  links {
    __typename
    header
    description
    url
  }
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "/api/gql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  