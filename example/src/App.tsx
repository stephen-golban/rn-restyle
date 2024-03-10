import * as React from 'react';

import { darkTheme, theme } from './theme';
import { View, SafeAreaView as RNSafeAreaView, Switch } from 'react-native';

import { createText, createRestyleComponent, ThemeProvider } from 'rn-restyle';

const Text = createText(theme);
const Box = createRestyleComponent(theme, View);
const SafeAreaView = createRestyleComponent(theme, RNSafeAreaView);

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const selectedTheme = darkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Box bg="background" fill>
        <SafeAreaView fill>
          <Box flex={1} px="m" g={8}>
            <Text variant="header">Welcome</Text>
            <Box bg="cardPrimaryBackground" p="m" br={10}>
              <Text variant="body">
                This is a simple example displaying how to use Restyle
              </Text>
            </Box>
            <Box bg="cardSecondaryBackground" p="m" br={10}>
              <Text variant="body">
                You can find the theme in theme.ts. Update the theme values to
                see how it changes this screen
              </Text>
            </Box>
            <Box
              bg="cardPrimaryBackground"
              row
              between
              align="center"
              p="m"
              br={10}
            >
              <Text variant="body">Toggle dark mode</Text>
              <Switch
                value={darkMode}
                onValueChange={(value: boolean) => setDarkMode(value)}
              />
            </Box>
          </Box>
        </SafeAreaView>
      </Box>
    </ThemeProvider>
  );
}
