# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/world-covid-19-data-cra/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser and OS details
   - Screenshots (if applicable)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React** with functional components and hooks
- **Redux Toolkit** for state management
- **JavaScript (ES6+)** with JSX
- **SCSS** for styling
- **ESLint** for code quality

Before submitting:
```bash
# Install dependencies
npm install

# Start development server and test your changes
npm start

# Build to ensure no errors
npm run build

# Run tests
npm test
```

### Coding Standards

1. **Components**: Use functional components with React Hooks
2. **State Management**: Use Redux Toolkit slices for global state
3. **Styling**: Use SCSS modules, maintain existing naming conventions
4. **Services**: Keep business logic in service files
5. **Naming**: Use clear, descriptive names for components and functions
6. **File Structure**: Follow the existing structure (components, services, store, utils)
7. **Imports**: Organize imports logically (React, third-party, local)

### Adding New Features

When adding new features:
1. Create components in appropriate folders under `src/components/`
2. Add service logic in `src/services/files/`
3. Update Redux slices in `src/store/slices/` if needed
4. Add utilities in `src/utils/files/` if needed
5. Update settings in `src/settings/settings.js` if required
6. Add corresponding SCSS files for styling
7. Test thoroughly across different browsers

### Project Structure

```
src/
├── components/       # React components
│   └── Boxes/       # Box-based UI components
├── core/            # Core enums and constants
├── data/            # Static data files
├── pages/           # Main page components
├── services/        # Business logic and API services
├── settings/        # Application configuration
├── store/           # Redux store and slices
└── utils/           # Utility functions
```

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
