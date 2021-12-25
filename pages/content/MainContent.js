import Image from "next/image";
import React from "react";
import GlassPane from "../../components/GlassPane/GlassPane";
import styles from "./MainContent.module.css";
import FullLogo from "../../public/logo-outlined.png";
import HoldingFish from "../../public/holding-fish.jpg";
import MoreFish from "../../public/more-fish.jpg";

const Pill = (props) => {
  const { children } = props;
  return <div className={styles.pill}>{children}</div>;
};

const SPORT_FISH = ["Cobia", "Striper", "Trout", "Spot"];
const DEEP_FISH = ["Tuna", "Mahi", "Marlin", "Tile", "Trigger", "Sail", "Seabass"];
const BOTTOM_FISH = ["Tile", "Tautog", "Red Drum", "Croaker","Spot"];

const MainContent = () => {
  return (
    <div className={styles.mainContentContainer}>
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
        <GlassPane className={styles.glassPaneLogo}>
          <div>
            <Image src={FullLogo} alt="logo" />
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
              <Image
                alt="fishing"
                className={styles.leftImage}
                height={250}
                width={250}
                src={HoldingFish}
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <div
              style={{
                marginBottom: "auto",
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                alt="fishing"
                className={styles.rightImage}
                height={250}
                width={250}
                src={MoreFish}
                objectPosition="center"
                objectFit="cover"
              />
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
          <h5 className={styles.menuTitle}>Full Day Deep Sea Fishing</h5>
          <p>$1250</p>
          <p className={styles.menuItemDescription}>
            Deep sea fishing is all about being out in the open sea, away from the shore. Roughly speaking, you will be in
            waters at least 100 ft deep, chasing after the bigger fish that live and migrate offshore. Usually
            synonymous with sport fishing or big game fishing, this is the fishing style you need if you are hoping to
            hook a real trophy.
          </p>
          <div className={styles.horizontalContainer}>
            {DEEP_FISH.map((fish) => (
              <Pill key={fish}>{fish}</Pill>
            ))}
          </div>
          <h5 className={styles.menuTitle}> Full Day Bottom Fishing</h5>
          <p>$1100</p>
          <p className={styles.menuItemDescription}>
            If you are looking for an action-packed filled day, bottom fishing is for you! This is known for its fun and is an 
            angler&apos;s favorite. Enjoy a nice adrenaline rush from catching fish from hundreds of feet below. 
          </p>
          <div className={styles.horizontalContainer}>
            {BOTTOM_FISH.map((fish) => (
              <Pill key={fish}>{fish}</Pill>
            ))}
          </div>
          <h5 className={styles.menuTitle}>Dolphin Tour</h5>
          <p>$250</p>
          <p className={styles.menuItemDescription}>
            Experience the dolphins the Chesapeake Bay waters has to offer! With large groups of dolphins often strolling
            off the coast, sightings are practically guaranteed. You won&apos;t want to miss the oppourtunity to see these 
            graceful creatures!  
          </p>
          <h5 className={styles.menuTitle}>Whale Watching Tour</h5>
          <p>$250</p>
          <p className={styles.menuItemDescription}>
            Experience an unforgettable whale watching trip out of Rudee Inlet. Join us to see these amazing marine mammals and 
            other wildlife in action! 
          </p>
          <h5 className={styles.menuTitle}>About the Captain</h5>
          <p>Geoffrey Scheepers</p>
          <p className={styles.menuItemDescription}>
            Captain Geoff Scheepers was born and raised in Virginia Beach, Virginia. Geoff began as a deck-hand on offshore 
            charter boats at the age of 18 and now, runs his own operation. He approaches every trip with passion while doing 
            what he loves and calls it work.
          </p>
          <h5 className={styles.menuTitle}>The Boat</h5>
          <p>Knot@Work</p>
          <p className={styles.menuItemDescription}>
            Grady-White&apos;s are one of the most respected boats out there. They&apos;re durable, spacious, and one of the best boats 
            for family fishing. Dual consoles easily adapt to a variety of activities. It is a large center console boat that 
            includes cabin space below the helm, a head sink, a bathroom, and a sleeping area. There&apos;s plenty of shade and
             seating while waiting for fish to bite. The Dual Mecury motors are running like brand new and ready to take you 
             fishing!
          </p>




        </div>
       
        
            
      </GlassPane>
    </div>
  );
};

export default MainContent;
