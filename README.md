# QuickCommerce

QuickCommerce is an e-commerce platform designed as a mobile SaaS (Software as a Service) application. Developed with **Expo** and **React Native**, this application enables multiple businesses to set up and customize their own online stores, providing a fast and easy e-commerce solution.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Main Dependencies](#main-dependencies)
- [Code Style](#code-style)
- [Contributions](#contributions)
- [License](#license)

---

## Installation

To get started with QuickCommerce, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quickcommerce.git
   cd quickcommerce
   ```

2. **Install dependencies** using **npm**:
   ```bash
   npm install
   ```

3. **Install Expo CLI** if not already installed:
   ```bash
   npm install -g expo-cli
   ```

4. **Set up Husky** (if not automatically set up):
   ```bash
   npx husky install
   ```

> Note: If using **yarn** as your package manager, ensure that all dependencies are properly installed and avoid mixing **npm** and **yarn** commands.

## Scripts

The `package.json` file includes several useful scripts for development. Here are the most important ones:

- `npm start`: Starts the development server with Expo.
- `npm run android`: Launches the application on an Android emulator.
- `npm run ios`: Launches the application on an iOS emulator (requires macOS and Xcode).
- `npm run web`: Launches the application in a web browser.
- `npm run lint`: Runs ESLint to check for code style issues.
- `npm run prepare`: Sets up Husky for Git hooks.

## Project Structure

The project follows a modular structure with the following main folders and files:

```plaintext
quickcommerce/
├── assets/              # Static resources, such as images or icons
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── screens/         # Main screens for the application
│   ├── services/        # API connection services (e.g., Firebase)
│   ├── context/         # React contexts for global state
│   └── utils/           # Utility functions
├── App.js               # Main entry file for the app
└── package.json         # Dependency and script configuration
```

## Main Dependencies

This project uses the following main dependencies:

- **expo**: The core framework that allows you to compile and run the app on multiple platforms.
- **react**: The main JavaScript library for building user interfaces.
- **react-native**: Library for building mobile applications with React.

### Development Dependencies

The project also includes various development tools to keep code clean and organized:

- **ESLint**: To analyze and enforce consistent code styling.
- **Prettier**: To format code in a uniform way.
- **Husky**: To manage Git hooks, like enforcing code style and commit message conventions.
- **Commitlint**: To ensure structured and consistent commit messages.

## Code Style

QuickCommerce follows standard code styling with ESLint and Prettier to ensure code consistency. Additionally, **Husky** and **Commitlint** help maintain good practices in the commit and version control process.

### Commit Rules

This project uses **Commitlint** with the `@commitlint/config-conventional` configuration to enforce structured commit messages. Here are some examples of valid commit messages:

- `feat: add authentication functionality`
- `fix: resolve rendering error on home screen`
- `docs: update README with new information`

## Contributions

Contributions to QuickCommerce are welcome. To improve the project, please follow these steps:

1. **Fork** the repository.
2. Create a **branch** for your feature (`git checkout -b feature/new-feature`).
3. **Commit** your changes (`git commit -m 'feat: add new feature'`).
4. **Push** the branch (`git push origin feature/new-feature`).
5. Create a **Pull Request** and describe your changes in detail.

## License

This project is private and not open for distribution. If you are a collaborator or authorized user, please ensure compliance with all internal license terms.
