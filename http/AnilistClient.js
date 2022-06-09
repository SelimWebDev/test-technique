import {ApolloClient, InMemoryCache} from "@apollo/client";

export const AnilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

export const GET_ANIMES = {
  query: `
    query($page: Int, $perPage: Int){
      Page(page: $page, perPage: $perPage){
        media {
          id
          title {
            romaji
          }
          description
        }
      }
    }
  `,
  variables:{
    page: 1,
    perPage: 50
  }
}