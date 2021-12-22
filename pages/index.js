import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainContent from "./content/MainContent";
import holdingFishImage from "../public/holding-fish.jpg";

const META = {
  title: "Knot@Work Fishing Charters",
  description: "Fishing charters for your family and friends off the coast of Virginia and North Carolina.",
  type: "website",
  image: `https://knotatworkcharters.com${holdingFishImage.src}`,
  url: "https://knotatworkcharters.com",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={META.url} />

        <meta property="og:title" content="Fishing Charters in Virginia and North Carolina." />
        <meta property="og:type" content={META.type} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <meta property="og:url" content={META.url} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content={META.title} />
        <meta name="twitter:image:alt" content="Alt text for image" />

        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="index, follow" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Eczar&family=Fredoka+One&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <video className={styles.videoContainer} autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
        </video>
        <MainContent />
      </main>
    </div>
  );
}
