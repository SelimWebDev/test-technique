import {ApolloProvider} from "@apollo/client";
import {AnilistClient} from "../http/AnilistClient";
import {PaginatedAnimes} from "../components/PaginatedAnimes";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <ApolloProvider client={AnilistClient}>
      <div className="container">
        <Title title={'Meilleurs Animes'}></Title>
        <PaginatedAnimes itemsPerPage={6}/>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 auto;
          width: 100%;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          height: 100%;
        }

      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }

      `}</style>
      </div>
    </ApolloProvider>
  )
}
