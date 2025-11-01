# CRUSH.md for Verin Project

This document outlines essential information for agents working within the Verin codebase.

## Project Type

This is an Expo/React Native project using TypeScript and Expo Router for navigation.

## Essential Commands

The following commands are available via `npm` scripts:

*   **`npm start`**: Starts the Expo development server.
*   **`npm run android`**: Starts the Expo development server and opens the project on an Android emulator or device.
*   **`npm run ios`**: Starts the Expo development server and opens the project on an iOS simulator or device.
*   **`npm run web`**: Starts the Expo development server and opens the project in a web browser.
*   **`npm run lint`**: Runs ESLint to check for code style and quality issues.
*   **`npm run reset-project`**: Executes a script to reset project-specific configurations (defined in `./scripts/reset-project.js`).

## Code Organization and Structure

*   **`app/`**: Contains the main application code, including routing definitions (`expo-router`).
    *   **`app/(tabs)/_layout.tsx`**: Defines the tab-based navigation layout for the application.
*   **`components/`**: Houses reusable UI components (e.g., `Button.tsx`, `taskList.tsx`).
*   **`assets/`**: Contains static assets like images.
*   **Configuration Files**:
    *   `app.json`, `eas.json`: Expo configuration files.
    *   `package.json`: Project dependencies and scripts.
    *   `tsconfig.json`: TypeScript configuration.
    *   `eslint.config.js`: ESLint configuration.

## Naming Conventions and Style Patterns

*   **Components**: Functional components are used, typically defined in `.tsx` files.
*   **Styling**: Styles are defined using `StyleSheet.create` within each component file.
*   **TypeScript**: The codebase uses TypeScript for type safety.

## Testing Approach and Patterns

No explicit testing framework or scripts were found in `package.json` beyond `expo lint`. Unit and integration tests would need to be added.

## Important Gotchas or Non-Obvious Patterns

*   **Expo Router**: Navigation is handled by Expo Router. Understand the `app/` directory structure for routing.
*   **Platform-specific code**: Be aware of potential platform-specific implementations using `Platform.select` from `react-native` if they are introduced. (Not observed yet, but common in React Native projects).
*   **Styling**: All styling is done using `StyleSheet.create`. Avoid inline styles or other styling libraries unless explicitly introduced.

## Existing Rule Files

No existing rule files were found in the common locations. This `CRUSH.md` serves as the primary documentation for agent interactions.