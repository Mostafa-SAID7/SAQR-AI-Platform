# Contributing Guidelines

Thank you for considering contributing to this project!

## How to Contribute

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear commit messages
   - Add tests if applicable

4. **Test your changes**

   ```bash
   npm test
   npm run build
   ```

5. **Submit a pull request**
   - Provide a clear description of changes
   - Reference any related issues

## Code Style

- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful variable and function names
- Add comments for complex logic

## Commit Messages

Use conventional commit format (enforced by commitlint):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (no logic change)
- `refactor:` Code refactoring (no feature change)
- `perf:` Performance improvement
- `test:` Test updates
- `chore:` Build/tooling changes
- `ci:` CI/CD changes
- `revert:` Revert a previous commit

**Breaking Changes**:
Add `BREAKING CHANGE:` in footer to trigger major version bump:

```
feat: redesign authentication flow

BREAKING CHANGE: Old login endpoint removed, use OAuth 2.0 instead
```

**Examples**:

- `feat(auth): add two-factor authentication`
- `fix(ssr): correct hydration mismatch on home page`
- `docs(readme): add deployment guide`
- `perf(bundle): optimize Angular boot time by 30%`
- `BREAKING CHANGE: remove legacy REST API`

## Semantic Versioning

Versions follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features (backward compatible)
- **PATCH** (0.0.1): Bug fixes (backward compatible)

Versions are automatically bumped based on commit types:

- `feat:` → MINOR version bump
- `fix:` / `perf:` → PATCH version bump
- `BREAKING CHANGE:` → MAJOR version bump
- Other types (`docs:`, `test:`, `chore:`, `ci:`) → no version bump

## Releases

Releases are **automatically generated** from commits:

1. Write commits using conventional format
2. Create PR and get approval
3. Merge to `main`
4. GitHub Actions automatically:
   - Analyzes commits
   - Bumps version
   - Updates package.json
   - Generates CHANGELOG.md entry
   - Creates git tag (v1.0.0)
   - Creates GitHub Release with changelog
   - Deploys to Vercel

**View releases**: https://github.com/Mostafa-SAID7/lead-geny-landing/releases

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass: `npm test -- --run`
3. Verify build works: `npm run build`
4. Use conventional commits in PR title/description
5. Request review from maintainers
6. Address review feedback
7. Merge after approval

Releases are automatically created on merge to main.

## Questions?

Open an issue for any questions or concerns.
