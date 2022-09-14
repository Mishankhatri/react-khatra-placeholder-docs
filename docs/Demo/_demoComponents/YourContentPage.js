import React, { useState } from "react";
import {
  KhatraPlaceholder,
  PBlock,
  PCard,
  PInLineContainer,
  PLine,
  PThemeProvider,
} from "react-khatra-placeholder";

import ToggleLoading from "./ToggleLoading";

const CustomPlaceholder = ({ animateWave, animateGlow }) => {
  return (
    <>
      {/* base component of placeholder, control animation of placeholder from here.*/}
      <PCard
        w="100%"
        animateWave={animateWave}
        animateGlow={animateGlow}
        style={{ padding: "1.2rem 0.75rem", border: "1px solid brown" }}
      >
        {/* creates rectangular block of given height and border radius.*/}
        <PBlock h="24px" w="35%" br="3px" style={{ marginBottom: "0.5rem" }} />
        {/* base component for creating paragraph lines.*/}
        <PInLineContainer br="3px" h="80%" w="98%">
          <PLine h="0.8rem" /> {/* creates lines, just like in paragraphs.*/}
          <PLine h="0.8rem" />
          <PLine h="0.8rem" w="60%" />
        </PInLineContainer>
      </PCard>
    </>
  );
};

const YourContentPage = () => {
  // your content loading logic.
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <KhatraPlaceholder
        isLoading={isLoading}
        customPlaceholder={<CustomPlaceholder />}
        animateWave
        style={{
          border: "1px solid brown",
          padding: "0.75rem",
          borderRadius: "0.75rem",
        }}
      >
        <h2>Your Beautiful content.</h2>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, beatae
          laudantium cupiditate dolorem officia officiis veritatis qui mollitia
          nostrum voluptate similique, magnam quaerat error veniam quas omnis
          quasi? Sint, obcaecati.
        </div>
      </KhatraPlaceholder>
      <ToggleLoading isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
};

export default YourContentPage;
