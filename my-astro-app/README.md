# My Astro App

This is a simple Astro application that demonstrates the use of components, layouts, and global styles.

## Project Structure

```
my-astro-app
├── src
│   ├── components        # Contains reusable components
│   │   └── ExampleComponent.astro
│   ├── layouts           # Contains layout components
│   │   └── MainLayout.astro
│   ├── pages             # Contains page components
│   │   └── index.astro   # Main entry point
│   └── styles            # Contains global styles
│       └── global.css
├── public                # Static assets
│   └── favicon.ico       # Favicon for the application
├── package.json          # NPM configuration file
├── astro.config.mjs      # Astro configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-astro-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- The `ExampleComponent.astro` file contains a reusable component that can be used throughout the application.
- The `MainLayout.astro` file serves as a wrapper for the pages, allowing for consistent layout across the application.
- The `index.astro` file is the main entry point and can be modified to include content specific to the homepage.
- Global styles can be added in the `global.css` file.

## License

This project is licensed under the MIT License.