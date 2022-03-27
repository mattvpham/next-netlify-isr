import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

function Home({ lastUpdated }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Last updated: {lastUpdated}</p>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const lastUpdated = new Date();
  return {
    props: {
      lastUpdated: lastUpdated.toUTCString(),
    },
    revalidate: 60,
  };
}

export default Home;
