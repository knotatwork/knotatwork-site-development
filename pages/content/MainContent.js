import Image from "next/image";
import React from "react";
import GlassPane from "../../components/GlassPane/GlassPane";
import styles from "./MainContent.module.css";
import FullLogo from "../../public/full-logo.png";
import HoldingFish from "../../public/holding-fish.jpg";
import MoreFish from "../../public/more-fish.jpg";

const Pill = (props) => {
  const { children } = props;
  return <div className={styles.pill}>{children}</div>;
};

const SPORT_FISH = ["Cobia", "Striper", "Trout", "Spot"];
const DEEP_FISH = ["Tuna", "Mahi", "Marlin", "Tile", "Trigger", "Sail", "Seabass"];

const MainContent = () => {
  return (
    <div className={styles.mainContentContainer}>
      <div style={{ flex: 1, height: "100vh", display: "flex", flexDirection: "column" }}>
        <GlassPane className={styles.glassPaneLogo}>
          <div>
            <Image src={FullLogo} />
          </div>
          <div style={{ color: "white", textAlign: "center", fontSize: "150%" }}>
            <h4 style={{ fontWeight: "bold" }}>Email, call or text for inquiries</h4>
            <div>757-802-1318</div>
            <div>knotatwork.fishingcharters@gmail.com</div>
          </div>
        </GlassPane>
      </div>
      <GlassPane className={styles.glassPaneMenu}>
        <div>
          <h3>Charter Menu</h3>
          <p>There is a max of 4 people for each trip.</p>
          <div className={styles.imageContainer}>
            <div
              style={{
                marginBottom: "auto",
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image className={styles.leftImage} height={250} width={250} src={HoldingFish} objectPosition="center" objectFit="cover" />
            </div>
            <div
              style={{
                marginBottom: "auto",
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image className={styles.rightImage} height={250} width={250} src={MoreFish} objectPosition="center" objectFit="cover" />
            </div>
          </div>
          <h5 className={styles.menuTitle}>Half day / Full day sport fishing</h5>
          <p>$450 / $800</p>
          <p className={styles.menuItemDescription}>
            Sportfishing is also known as recreational fishing. It is fishing for fun, hobbies and even as a
            competition. Sportfishing is different from commercial fishing, or self sustenance fishing since
            sportfishing is not meant for earning profits, or food, but the main objective is pleasure.
          </p>
          <div className={styles.horizontalContainer}>
            {SPORT_FISH.map((fish) => (
              <Pill key={fish}>{fish}</Pill>
            ))}
          </div>
          <h5 className={styles.menuTitle}>Full day deep sea fishing</h5>
          <p>$1250</p>
          <p className={styles.menuItemDescription}>
            Deep sea fishing is all about being out in the open sea, away from the shore. Roughly speaking, you’ll be in
            waters at least 100 ft deep, chasing after the bigger fish that live and migrate offshore. Usually
            synonymous with sport fishing or big game fishing, this is the fishing style you need if you’re hoping to
            hook a real trophy.
          </p>
          <div className={styles.horizontalContainer}>
            {DEEP_FISH.map((fish) => (
              <Pill key={fish}>{fish}</Pill>
            ))}
          </div>
          <h5 className={styles.menuTitle}>Dolphin tour</h5>
          <p>$250</p>
          <h5 className={styles.menuTitle}>Whale watching tour</h5>
          <p>$250</p>
        </div>
      </GlassPane>
    </div>
  );
};

export default MainContent;
