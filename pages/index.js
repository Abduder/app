import Link from "next/link"
import Head from 'next/head'
import { useEffect, useState } from "react";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/home.ico" />
      </Head>

      <main>
        <div className="nav-bar">
          <div className="logo">
            <h1 className="title">
              App title
            </h1>
            <p className="description">
              website description
            </p>
          </div>

          <div className="nav-items">
            <Link href="/posts/depose-annonce">
            <a className="card">
              <h5>+ deposer une annonce</h5>
            </a>
            </Link>

            <Link href="/posts/appartements">
            <a  className="card">
            <h5>appartements</h5>            
            </a>
            </Link>

            <Link href="/posts/maisons-et-villas">
            <a  className="card">
            <h5>maisons-et-villas</h5>            
            </a>
            </Link>

            <Link href="/posts/bureaux-et-plateaux">
            <a  className="card">
            <h5>bureaux-et-plateaux</h5>            
            </a>
            </Link>

            <Link href="/posts/terrains-et-fermes">
            <a  className="card">
            <h5>terrains-et-fermes</h5>            
            </a>
            </Link>
          </div>
        </div>
        <div>
          {postsState.map((post, index) => {
            return (
              <div className="card" key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            );
          })}
        </div>
        
      </main>

      <footer>
        {/*<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>*/}
      </footer>

      <style jsx>{`
        /*.container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
        }*/

        main {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          //justify-content: center;
          //align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .nav-bar{
          position :relative;
          height : 100px;
          width:100%;
          display:grid;
          grid-template-columns: 1fr 2fr;

        }

        .nav-items {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;          
          max-height: 50px;
          margin-top: 10px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: .3rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let posts = await res.json();

  return {
    props: { posts },
  };
}