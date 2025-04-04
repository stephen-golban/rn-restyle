# rn-restyle

A powerful, type-safe styling library for React Native that provides robust theming, responsive design, and attribute-based styling.

## Features

- 🎨 **Comprehensive Theming System** - Define colors, spacing, and other design tokens in a centralized theme
- 📱 **Responsive Design** - Create layouts that adapt to different screen sizes
- 🧩 **Attribute-Based Styling** - Apply styles directly through component props (`justify="between"` instead of `justifyContent="space-between"`)
- 🔒 **Type-Safe** - Full TypeScript support with autocomplete and type checking
- 🎭 **Dark Mode Support** - Easily implement and switch between light and dark themes
- 📦 **Style Variants** - Define and use reusable style combinations
- 🔄 **Component Composition** - Build complex UI components from simpler, themed building blocks

## Installation

```bash
# Using npm
npm install rn-restyle

# Using yarn
yarn add rn-restyle

# Using bun
bun add rn-restyle
```

## Basic Usage

1. Create a theme:

```tsx
// theme.ts
import { BaseTheme } from "rn-restyle";

export const theme: BaseTheme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#000000",
    primary: "#3B82F6",
    // ...more colors
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    // ...more spacing values
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
  // ...other theme properties
};
```

2. Set up the ThemeProvider:

```tsx
// App.tsx
import React from "react";
import { ThemeProvider } from "rn-restyle";
import { theme } from "./theme";
import HomeScreen from "./screens/HomeScreen";

const App = () => (
  <ThemeProvider theme={theme}>
    <HomeScreen />
  </ThemeProvider>
);

export default App;
```

3. Use the styled components:

```tsx
// HomeScreen.tsx
import React from "react";
import { Box, Text } from "rn-restyle";

const HomeScreen = () => (
  <Box flex={1} bg="background" p="m">
    <Text variant="h1" color="primary" mb="m">
      Welcome to rn-restyle
    </Text>

    <Box
      bg="primary"
      p="m"
      rounded="m"
      flexDirection="row"
      justify="between"
      align="center"
    >
      <Text color="white">Left aligned text</Text>
      <Text color="white">Right aligned text</Text>
    </Box>

    <Box
      mt="l"
      flexDirection={{
        phone: "column",
        tablet: "row",
      }}
    >
      <Box flex={1} bg="secondary" p="m" m="s" rounded="m">
        <Text>This layout is responsive</Text>
      </Box>
      <Box flex={1} bg="secondary" p="m" m="s" rounded="m">
        <Text>It changes based on screen size</Text>
      </Box>
    </Box>
  </Box>
);

export default HomeScreen;
```

## Implementing Dark Mode

```tsx
// theme.ts
import { BaseTheme } from "rn-restyle";

// Light theme
export const lightTheme: BaseTheme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#000000",
    // ...other colors
  },
  // ...other theme properties
};

// Dark theme
export const darkTheme: BaseTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: "#121212",
    foreground: "#FFFFFF",
    // ...other dark mode colors
  },
};
```

```tsx
// App.tsx
import React, { useState } from "react";
import { ThemeProvider } from "rn-restyle";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* Your app content */}
      <Button onPress={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</Button>
    </ThemeProvider>
  );
};
```

## Intuitive Shorthand Properties

rn-restyle provides several intuitive shorthand properties to make styling more expressive and readable:

### Layout Shorthands

| Shorthand    | Expanded Property                                 | Example                     |
| ------------ | ------------------------------------------------- | --------------------------- |
| `row`        | `flexDirection: "row"`                            | `<Box row>...</Box>`        |
| `col`        | `flexDirection: "column"`                         | `<Box col>...</Box>`        |
| `rowReverse` | `flexDirection: "row-reverse"`                    | `<Box rowReverse>...</Box>` |
| `colReverse` | `flexDirection: "column-reverse"`                 | `<Box colReverse>...</Box>` |
| `wrap`       | `flexWrap: "wrap"`                                | `<Box wrap>...</Box>`       |
| `fill`       | `flex: 1`                                         | `<Box fill>...</Box>`       |
| `unfill`     | `flex: undefined`                                 | `<Box unfill>...</Box>`     |
| `center`     | `alignItems: "center" & justifyContent: "center"` | `<Box center>...</Box>`     |

### Position Shorthands

| Shorthand  | Expanded Property      | Example                   |
| ---------- | ---------------------- | ------------------------- |
| `absolute` | `position: "absolute"` | `<Box absolute>...</Box>` |
| `relative` | `position: "relative"` | `<Box relative>...</Box>` |

### Alignment Shorthands

| Shorthand         | Expanded Property                 | Example                          |
| ----------------- | --------------------------------- | -------------------------------- |
| `items-center`    | `alignItems: "center"`            | `<Box items-center>...</Box>`    |
| `items-start`     | `alignItems: "flex-start"`        | `<Box items-start>...</Box>`     |
| `items-end`       | `alignItems: "flex-end"`          | `<Box items-end>...</Box>`       |
| `justify-center`  | `justifyContent: "center"`        | `<Box justify-center>...</Box>`  |
| `justify-between` | `justifyContent: "space-between"` | `<Box justify-between>...</Box>` |
| `justify-around`  | `justifyContent: "space-around"`  | `<Box justify-around>...</Box>`  |

### Combined with Other Properties

These shorthands can be combined with other properties for expressive layouts:

```tsx
<Box
  row
  items-center
  justify-between
  p="m"
  bg="primary"
>
  <Text>Left aligned</Text>
  <Text>Right aligned</Text>
</Box>

<Box relative h={200} w="100%">
  <Box absolute top={0} right={0} p="s" bg="error">
    <Text>Top right</Text>
  </Box>
</Box>

<Box center p="l" bg="secondary">
  <Text>Perfectly centered</Text>
</Box>
```

## Advanced Usage

### Creating Custom Themed Components

```tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, useTheme } from "rn-restyle";

const Button = ({ label, variant = "primary", onPress, ...rest }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        bg={variant === "primary" ? "primary" : "secondary"}
        p="m"
        rounded="m"
        {...rest}
      >
        <Text
          color={variant === "primary" ? "white" : "foreground"}
          textAlign="center"
        >
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
```

### Using Responsive Values

```tsx
<Box
  flexDirection={{
    phone: "column",
    tablet: "row",
  }}
  p={{
    phone: "s",
    tablet: "m",
    desktop: "l",
  }}
>
  {/* Content */}
</Box>
```

### Style Variants

```tsx
// theme.ts
export const theme: BaseTheme = {
  // ...other theme properties
  cardVariants: {
    elevated: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 2,
    },
    flat: {
      backgroundColor: "gray50",
      borderRadius: 8,
      padding: 16,
    },
  },
};

// Usage
<Box variant="elevated">
  <Text>This is an elevated card</Text>
</Box>;
```

## API Reference

### Core Components

- **Box** - A styled `View` component
- **Text** - A styled `Text` component

### Hooks

- **useTheme** - Access the current theme
- **useThemeSwitch** - Switch between themes
- **useResponsiveStyles** - Handle responsive styles based on screen size

### Props

Our components accept all standard React Native props plus:

#### Spacing Props

- `m`, `margin` - margin on all sides
- `mt`, `marginTop` - margin top
- `mr`, `marginRight` - margin right
- `mb`, `marginBottom` - margin bottom
- `ml`, `marginLeft` - margin left
- `mx`, `marginHorizontal` - margin on x-axis
- `my`, `marginVertical` - margin on y-axis
- `p`, `padding` - padding on all sides
- `pt`, `paddingTop` - padding top
- `pr`, `paddingRight` - padding right
- `pb`, `paddingBottom` - padding bottom
- `pl`, `paddingLeft` - padding left
- `px`, `paddingHorizontal` - padding on x-axis
- `py`, `paddingVertical` - padding on y-axis

#### Layout Props

- `flex` - flex value
- `direction`, `flexDirection` - flex direction
- `wrap`, `flexWrap` - flex wrap
- `justify` - justify content (supports shorthand: `between`, `center`, etc.)
- `align` - align items (supports shorthand: `start`, `center`, etc.)
- `w`, `width` - width
- `h`, `height` - height
- `pos`, `position` - position

#### Color Props

- `bg`, `background`, `backgroundColor` - background color
- `color`, `textColor` - text color
- `borderColor` - border color

#### Border Props

- `rounded` - border radius
- `borderWidth` - border width

## Example App

See the `examples` directory for a complete example app that demonstrates all features of rn-restyle.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
