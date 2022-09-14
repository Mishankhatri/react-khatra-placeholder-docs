---
sidebar_position: 2
---

import { KhatraPlaceholder,PCardContainer,PCard, PBlock, PInLineContainer, PLine } from "react-khatra-placeholder";

import ToggleTheme from "../Demo/\_demoComponents/ToggleTheme";

# Quick Start

## After installation

Import KhatraPlaceholder component from the react-khatra-placeholder.

```jsx
import { KhatraPlaceholder } from "react-khatra-placeholder";
```

```jsx
export const YourContentPage = () => {
  // your content loading logic.
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <KhatraPlaceholder
        isLoading={isLoading}
        type={"ParagraphPlaceholder"}
        delay={300}
        animateWave
      >
        <div>Your Beautiful content.</div>
      </KhatraPlaceholder>
    </>
  );
};
```

For Creating CustomPlaceholders import necessary components from the react-khatra-placeholder.

```jsx
import {
  KhatraPlaceholder,
  PCardContainer,
  PCard,
  PBlock,
  PInlineContainer,
  PLine,
} from "react-khatra-placeholder";
```

```jsx
const CustomPlaceholder = () => {
  return (
    <>
      {/* to hold more than one PCard. */}
      <PCardContainer>
        {/* base component of placeholder, control animation of placeholder from here.*/}
        <PCard w="400px" h="400px" animateWave>
          {/* creates rectangular block of given height and border radius.*/}
          <PBlock h="50%" br="8px" />
          {/* base component for creating paragraph lines.*/}
          <PInLineContainer gap="0.1rem" br="3px">
            <PLine h="0.8rem" /> {/* creates lines, just like in paragraphs.*/}
            <PLine w="70%" h="0.8rem" />
            <PLine w="80%" h="0.8rem" />
          </PInLineContainer>
          <PBlock w="30%" h="2rem" br="3px" />
        </PCard>
      </PCardContainer>
    </>
  );
};

export const YourContentPage = () => {
  // your content loading logic.
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <KhatraPlaceholder
        isLoading={isLoading}
        customPlaceholder={<CustomPlaceholder />}
        delay={300}
        animateWave
      >
        <div>Your Beautiful content.</div>
      </KhatraPlaceholder>
    </>
  );
};
```
