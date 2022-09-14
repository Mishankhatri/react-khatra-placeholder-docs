---
sidebar_position: 5
---

import { PThemeProvider,KhatraPlaceholder } from "react-khatra-placeholder";
import ToggleTheme from "../Demo/\_demoComponents/ToggleTheme"

# Themes

## `PThemeProvider`

PThemeProvider is the component to pass your theme colors and state.
Maintains own theme state with boolean state : darkTheme and handler:handleTheme and defaults to light theme.
Access darkTheme, handleTheme via `useTheme()`

```jsx
//for providing darkTheme state and handler globally
import { PThemeProvider } from "react-khatra-placeholder";

return (
  <PThemeProvider
    lightModeBackground="orange"
    lightModeColor="brown"
    darkModeBackground="lightgreen"
    darkModeColor="green"
    darkModeShine="lightblue"
  >
    <YourTopParentComponentPage />
  </PThemeProvider>
);
```

| Property            | Type   | Required | Default value                | Description                                             |
| :------------------ | :----- | :------- | :--------------------------- | :------------------------------------------------------ |
| lightModeColor      | String | no       | DEFAULT_LIGHTMODE_LINE_COLOR | light mode color of placeholder lines and blocks.       |
| darkModeColor       | String | no       | DEFAULT_DARKMODE_LINE_COLOR  | dark mode color of placeholder lines and blocks.        |
| lightModeBackground | String | no       | DEFAULT_LIGHTMODE_BG_COLOR   | light mode background color of placeholder cards.       |
| darkModeBackground  | String | no       | DEFAULT_DARKMODE_BG_COLOR    | light mode background color of placeholder cards.       |
| lightModeShine      | String | no       | DEFAULT_LIGTHMODE_SHINE      | light mode shine color of placeholder lines and blocks. |
| darkModeShine       | String | no       | DEFAULT_DARKMODE_SHINE       | light mode shine color of placeholder lines and blocks. |

`DEFAULT_LIGHTMODE_LINE_COLOR = "#d7d7d7"` <br/>
`DEFAULT_DARKMODE_LINE_COLOR = "#383838"` <br/>
`DEFAULT_LIGHTMODE_BG_COLOR = "#ffffff"` <br/>
`DEFAULT_DARKMODE_BG_COLOR = "#121212"` <br/>
`DEFAULT_LIGTHMODE_SHINE = "#eeeeee"` <br/>
`DEFAULT_DARKMODE_SHINE = "#6d6c6c"` <br/>

## `useTheme()`

For accessing `useTheme()` hook:

```jsx
import { useTheme } from "react-khatra-placeholder";

//example for toggle theme button
const ToggleTheme = () => {
  const { darkTheme, handleTheme } = useTheme();
  return <button onClick={() => handleTheme(!darkTheme)}>Toggle Theme</button>;
};
```

## `Theming in action:`

Here is quick example of how you can use theming options on your projects.

<PThemeProvider
  lightModeBackground="orange"
  lightModeColor="brown"
  darkModeBackground="lightgreen"
  darkModeColor="green"
  darkModeShine="lightblue">

<KhatraPlaceholder
isLoading={true}
type="ProductPlaceholder"
animateWave
style={{border: "1px solid brown", padding: "0.75rem",borderRadius: "0.75rem"}} >

    <h2>Your Beautiful content.</h2>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, beatae
      laudantium cupiditate dolorem officia officiis veritatis qui mollitia
      nostrum voluptate similique, magnam quaerat error veniam quas omnis
      quasi? Sint, obcaecati.
    </div>

  </KhatraPlaceholder>
  <ToggleTheme/>
  </PThemeProvider>

```jsx
//for providing darkTheme state and handler globally
import { PThemeProvider } from "react-khatra-placeholder";

return (
  <PThemeProvider
    lightModeBackground="orange"
    lightModeColor="brown"
    darkModeBackground="lightgreen"
    darkModeColor="green"
    darkModeShine="lightblue"
  >
    <KhatraPlaceholder
      isLoading={true}
      type="ProductPlaceholder"
      animateWave
      style={{
        border: "1px solid brown",
        padding: "0.75rem",
        borderRadius: "0.75rem",
      }}
    >
      <div>Your Real Product</div>
    </KhatraPlaceholder>
    <ToggleTheme />
  </PThemeProvider>
);
```
