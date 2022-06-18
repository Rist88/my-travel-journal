import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigetion";
import Card from "../components/Card";
import data from "../lib/data";

const Home: NextPage = () => {
  const cards = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });

  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <section className="main">{cards}</section>
    </div>
  );
};

export default Home;
