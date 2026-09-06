# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please report it responsibly by emailing **security@example.com** instead of using the public issue tracker.

**Do not disclose the vulnerability publicly until we have had an opportunity to fix it.**

### What to Include in Your Report

When reporting a security vulnerability, please provide:

1. **Description**: Clear explanation of the vulnerability
2. **Location**: File(s), function(s), or component(s) affected
3. **Reproduction Steps**: Detailed steps to reproduce the issue
4. **Impact**: Potential impact (data leak, unauthorized access, code execution, etc.)
5. **Affected Versions**: Which versions of the project are affected
6. **Suggested Fix** (optional): If you have a proposed solution

### Response Timeline

- **Initial Response**: Within 48 hours
- **Assessment**: We'll investigate and assess the severity
- **Fix Development**: Critical issues will be prioritized for immediate patching
- **Release**: Security patches will be released as soon as possible
- **Credit**: We'll credit you in the security advisory (unless you prefer anonymity)

## Security Best Practices

### For Users/Deployers

1. **Keep Dependencies Updated**: Run `npm outdated` regularly and update packages
2. **Environment Variables**: Never commit `.env` files or credentials to version control
3. **Node.js Version**: Use Node.js v20.19+ or v22.12+ as specified in `.node-version`
4. **Build Verification**: Always verify builds pass all tests before deployment
5. **SSL/TLS**: Enable HTTPS in production deployments

### For Contributors

1. **Code Review**: All changes require review before merge
2. **Security Scanning**: Workflows automatically scan for hardcoded secrets (TruffleHog)
3. **Dependency Audit**: npm audit runs daily; critical vulnerabilities block builds
4. **TypeScript Strict Mode**: All code must pass strict type checking
5. **Template Validation**: Angular templates are validated with AOT compilation

## Known Vulnerabilities

We track security advisories for our dependencies:
- View current audit status: `npm audit`
- View outdated packages: `npm outdated`
- Details: See GitHub Security Advisories tab

## Security Checklist for Releases

Before releasing a new version:

- [ ] Run `npm audit` and resolve critical/high vulnerabilities
- [ ] Verify all tests pass: `npm test -- --run`
- [ ] Verify build succeeds: `npm run build`
- [ ] Verify SSR server starts: `npm run serve:ssr:lead-gen-landing`
- [ ] Check for secrets: `npx trufflesecurity scan .`
- [ ] Update CHANGELOG with security fixes
- [ ] Tag release with version (semver)
- [ ] Create GitHub release with security notes

## Security Headers

The Express server includes the following security configuration:

```typescript
// In src/server.ts
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);
```

### Recommended Production Security Headers

For production deployments, add security headers middleware:

```typescript
import helmet from 'helmet';

app.use(helmet()); // Adds HSTS, X-Frame-Options, X-Content-Type-Options, etc.
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
  }
}));
```

Install: `npm install helmet`

## Third-Party Security Tools

This project integrates with:

- **npm audit**: Weekly automated security scanning
- **TruffleHog**: Hardcoded secrets detection in all commits
- **GitHub Security Advisories**: Vulnerability tracking
- **Dependabot**: Automated dependency updates

## Questions?

For security questions (non-vulnerability): Open a discussion or issue, but **do not disclose security details publicly**.

## Acknowledgments

We appreciate responsible security research and vulnerability reporting. This project follows responsible disclosure principles to keep our users safe.

---

Last updated: September 2026  
Policy version: 1.0
