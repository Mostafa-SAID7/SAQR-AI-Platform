# GitHub Actions Workflows - Complete Reference

This document provides comprehensive documentation for all CI/CD workflows configured for the Lead Gen Landing project.

## Table of Contents

1. [Workflow Overview](#workflow-overview)
2. [CI - Test & Build](#ci---test--build)
3. [Code Quality](#code-quality)
4. [Security Audit](#security-audit)
5. [SSR Validation](#ssr-validation)
6. [Dependency Management](#dependency-management)
7. [Failure Resolution Guide](#failure-resolution-guide)
8. [Local Testing](#local-testing)

---

## Workflow Overview

| Workflow | File | Trigger | Jobs | Status |
|----------|------|---------|------|--------|
| **CI - Test & Build** | ci-test-build.yml | Push/PR | 4 | Required ✅ |
| **Code Quality** | code-quality.yml | Code changes | 7 | Required ✅ |
| **Security Audit** | security-audit.yml | Daily 06:00 UTC | 5 | Informational ⚠ |
| **SSR Validation** | ssr-validation.yml | Push/PR | 3 | Required ✅ |
| **Dependency Management** | dependency-audit.yml | Weekly Mon | 3 | Informational ⚠ |

**Legend**: ✅ Required (blocks merge) | ⚠ Informational (alerts only)

---

## CI - Test & Build

**File**: `.github/workflows/ci-test-build.yml`  
**Triggers**: Push/PR to main or develop  
**Runtime**: ~8-10 minutes  

### 4 Sequential Jobs:

1. **setup-and-verify** → Validates Node.js 22.14.0, npm lock file, assets
2. **code-format-check** → Prettier check (depends on setup)
3. **unit-tests** → Vitest suite (depends on setup)
4. **build-application** → Production build (depends on format + tests)

### Bundle Budgets:
- Browser: 500kB warning / 1MB error
- Styles: 18kB warning / 24kB error

### Artifacts Uploaded:
- `build-dist` (7-day retention)
- `bundle-report.txt`
- `test-logs`

---

## Code Quality

**File**: `.github/workflows/code-quality.yml`  
**Triggers**: Source code/config changes to main or develop  
**Runtime**: ~6-8 minutes  

### 7 Independent Jobs (all parallel):

1. **typescript-strict-check** → Strict type checking (`npx tsc --noEmit`)
2. **template-syntax-check** → Angular AOT compilation validation
3. **format-consistency** → Prettier enforcement
4. **secrets-scanning** → Hardcoded credentials detection (TruffleHog)
5. **build-warnings-check** → TypeScript compiler warnings
6. **dependency-consistency** → Lock file validation
7. **config-validation** → JSON syntax validation (angular.json, tsconfig.json, etc.)

---

## Security Audit

**File**: `.github/workflows/security-audit.yml`  
**Triggers**: 
- Daily 06:00 UTC
- Package.json changes
- Manual dispatch

### 5 Jobs:

1. **npm-security-audit** → `npm audit` for vulnerabilities (fails on critical)
2. **dependency-license-check** → Detects GPL/AGPL licenses
3. **package-lock-integrity** → Validates lock file authenticity
4. **supply-chain-risk-check** → Critical package verification, npm registry check
5. **outdated-packages-report** → Available updates summary

### Artifacts:
- `npm-audit-report.json` (30-day retention)
- `outdated-dependencies` (90-day retention)

---

## SSR Validation

**File**: `.github/workflows/ssr-validation.yml`  
**Triggers**: Push/PR to main or develop  
**Runtime**: ~3-5 minutes

### 3 Jobs:

1. **ssr-build-validation** → Verify `server.mjs`, `index.html`, prerender manifest
2. **ssr-startup-test** → Start server, test HTTP 200 response, verify HTML content
   - Timeout: 5 minutes
   - Server startup timeout: 30 seconds
   - Tests 5 consecutive requests
3. **hydration-compatibility** → Check Angular hydration configuration

### Artifacts:
- `ssr-server-logs` (7-day retention)

---

## Dependency Management

**File**: `.github/workflows/dependency-audit.yml`  
**Triggers**: Weekly Monday 09:00 UTC, manual  

### 3 Jobs:

1. **dependency-version-check** → Critical deps: Angular, Express, TypeScript, Node.js
2. **outdated-dependencies** → Categorizes updates (major/minor/patch)
3. **npm-audit-report** → Production deps vulnerability scan

### Artifacts:
- `outdated-dependencies` (90-day)
- `npm-audit-prod` (90-day)

---

## Failure Resolution Guide

### Build Failures

| Error | Fix |
|-------|-----|
| Node.js version mismatch | Install Node 22.14.0 via nvm |
| `npm ERR! code ERESOLVE` | `npm ci` or update dependencies |
| `error NG*` | Fix template syntax in .html files |
| `TS####` | `npx tsc --noEmit` to identify type errors |
| Bundle > 1MB | Lazy-load routes, remove unused imports |

### Test Failures

| Error | Fix |
|-------|-----|
| Tests fail | `npm test` locally, debug and fix |
| Missing module | Check import path, verify file exists |

### Format/Security Failures

| Error | Fix |
|-------|-----|
| Prettier fails | `npx prettier --write .` |
| Secret detected | Remove credential, revoke, add to .gitignore |
| Critical vuln | `npm audit fix` or `npm update package-name` |

---

## Local Testing

```bash
# Verify environment
node --version  # Should be 22.14.0
npm ci

# Test individual jobs
npm run test -- --run              # Unit Tests
npx prettier --check .             # Format Check
npx tsc --noEmit                   # TypeScript Check
npm run build                      # Build App
npx ng build --aot                 # Template Check
npm audit                          # Security Audit
npm outdated                       # Dependency Check
npm run serve:ssr:lead-gen-landing # SSR Startup Test
```

---

## Workflow Execution Pattern

```
CI Pipeline (on push/PR):
setup-and-verify ──────┬─────────────────────────┐
                       ├─ code-format-check      │
                       ├─ unit-tests             │
                       └─ (parallel)             │
                               │                 │
                        build-application ◄──────┘
                               │
                        Upload artifacts
```

```
Code Quality (in parallel):
├─ typescript-strict-check
├─ template-syntax-check
├─ format-consistency
├─ secrets-scanning
├─ build-warnings-check
├─ dependency-consistency
└─ config-validation
```

---

## Key Features

✅ **Concurrency Control**: Cancels previous runs in same branch  
✅ **Artifact Retention**: Configurable retention (7/30/90 days)  
✅ **GitHub Summary Integration**: Reports in PR/workflow summary  
✅ **Security Focus**: Secrets scanning, audit tracking  
✅ **SSR Validation**: Server startup & hydration checks  
✅ **Comprehensive Logging**: Test/build/server logs uploaded  

---

## File References

- `.github/workflows/ci-test-build.yml` - CI pipeline
- `.github/workflows/code-quality.yml` - Code validation
- `.github/workflows/security-audit.yml` - Security scanning
- `.github/workflows/ssr-validation.yml` - SSR tests
- `.github/workflows/dependency-audit.yml` - Dependencies
- `package.json` - Scripts & dependencies
- `angular.json` - Build configuration
- `tsconfig.json` - TypeScript config
- `.prettierrc` - Format rules
