# 🚀 Lead Gen Landing

> A modern, high-performance Angular landing page designed for lead generation and conversion optimization.

[![Angular](https://img.shields.io/badge/Angular-21.2-red?logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design optimized for conversions
- ⚡ **High Performance** - Built with Angular 21 for blazing-fast load times
- 📱 **Fully Responsive** - Perfect experience across all devices
- 🔧 **Easy Customization** - Well-structured codebase for quick modifications
- 🚀 **Production Ready** - Optimized build with SSR support
- 📊 **SEO Optimized** - Server-side rendering for better search visibility

## 🛠️ Tech Stack

- **Framework**: Angular 21.2
- **Language**: TypeScript 5.9
- **Styling**: CSS3 with modern features
- **Build Tool**: Angular CLI
- **Testing**: Vitest
- **Deployment**: Netlify

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js v20.19+ or v22.12+** (v22.14.0 recommended)
- npm v10 or higher
- Angular CLI v21.2.6

> ⚠️ **Important:** Angular 21 requires Node.js v20.19+ or v22.12+. The project will not build with Node.js v18.

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/lead-geny-landing.git

# Navigate to project directory
cd lead-geny-landing

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:4200/` to see the application running.

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in dist/lead-gen-landing/browser/
```

## 📁 Project Structure

```
lead-gen-landing/
├── src/                    # Source files
│   ├── app/               # Application components
│   ├── assets/            # Static assets
│   └── styles/            # Global styles
├── docs/                  # Documentation
├── screenshots/           # Application screenshots
├── .github/               # GitHub workflows
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies
```

## 📚 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed installation and setup instructions
- [Project Structure](docs/PROJECT_STRUCTURE.md) - Architecture and file organization
- [Architecture Guide](docs/ARCHITECTURE.md) - Feature boundaries and dependency rules
- [Deployment Guide](docs/DEPLOYMENT.md) - How to deploy to Netlify
- [Contributing](.github/CONTRIBUTING.md) - Guidelines for contributors

## 🚀 Deployment

This project is configured for automatic deployment on Netlify.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. The build settings are automatically configured via `netlify.toml`
3. Push to main branch to trigger deployment

**Build Configuration:**

- Build command: `npm run build`
- Publish directory: `dist/lead-gen-landing/browser`

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run watch
```

## 🛠️ Development

### Generate Components

```bash
# Generate a new component
ng generate component component-name

# Generate a service
ng generate service service-name

# Generate a module
ng generate module module-name
```

### Code Formatting

```bash
# Format code with Prettier
npx prettier --write .
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mostafa SAID**

- GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.dev/)
- Deployed on [Netlify](https://www.netlify.com/)
- Icons and assets from various open-source projects

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/Mostafa-SAID7/lead-geny-landing/issues)
- Check the [documentation](docs/)
- Contact the maintainers

---

<p align="center">Made with ❤️ by Mostafa SAID</p>
