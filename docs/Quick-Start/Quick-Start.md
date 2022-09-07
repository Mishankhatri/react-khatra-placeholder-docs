---
sidebar_position: 2
---

import { PCardContainer,PCard, PBlock, PInLineContainer, PLine } from "react-khatra-placeholder";

import ThemeProvider from "../Demo/\_demoComponents/ThemeProvider";
import ToggleTheme from "../Demo/\_demoComponents/ToggleTheme";

# Quick Start

## After installation

<p> Import necessary components from the react-khatra-placeholder.</p>

```jsx
import {
  PCardContainer,
  PCard,
  PBlock,
  PInlineContainer,
  PLine,
} from "react-khatra-placeholder";
```

## Create Your First Placeholder

<ThemeProvider>
  <PCardContainer>
    <PCard w="400px" h="400px" animateWave>
      <PBlock h="50%" br="8px" />
      <PInLineContainer gap="0" br="3px">
        <PLine h="0.8rem" />
        <PLine w="70%" h="0.8rem" />
        <PLine w="80%" h="0.8rem" />
      </PInLineContainer>
      <PBlock w="30%" h="2rem" br="3px" />
    </PCard>
  </PCardContainer>
<ToggleTheme/>
</ThemeProvider>

<br/>

```jsx
import {
  PCardContainer,
  PCard,
  PBlock,
  PInlineContainer,
  PLine,
} from "react-khatra-placeholder";

export const YourFirstPlaceholder = () => {
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
```
