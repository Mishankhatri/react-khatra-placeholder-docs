---
sidebar_position: 6
---

# Themes

## ThemeContext

Defaults to light theme.
For passing Dark theme state:<br/>
Use `<ThemeContext.Provider value={{darkTheme,handleTheme:setDarkTheme}}>` on top parent component.<br/>

```jsx
//for providing darkTheme state and handler globally
import { ThemeContext } from "react-khatra-placeholder";

const [darkTheme, setDarkTheme] = useState(false);
return (
  <ThemeContext.Provider value={{ darkTheme, handleTheme: setDarkTheme }}>
    <YourTopParentComponent />
  </ThemeContext.Provider>
);
```

:::note Note
Make sure context value has same keys {darkTheme: Boolean state, handleTheme: state setter}
:::

## useTheme()

For accessing `useTheme()` hook:

```jsx
import { useTheme } from "react-khatra-placeholder";

const { darkTheme, handleTheme } = useTheme();
return <button onClick={() => handleTheme(!darkTheme)}>Toggle Theme</button>;
```
