# Vercel Deployment Guide - Lead Gen Landing

## Quick Start

This Angular 21 SSR application is configured for seamless deployment on Vercel.

### Prerequisites

- Node.js 22.14.0+ (automatic via `.nvmrc`)
- npm 10.9.2+
- GitHub repository connected to Vercel
- Vercel account

### Deployment Steps

#### 1. Connect Repository to Vercel

```bash
# Via Vercel Dashboard:
1. Go to vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Vercel auto-detects Angular framework
5. Click "Deploy"
```

#### 2. Environment Configuration

Vercel reads configuration from:
- **Node.js Version**: `.nvmrc` (22.14.0)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/lead-gen-landing/browser`
- **Install Command**: `npm ci`

#### 3. Build Process

Vercel will:
1. Install dependencies with `npm ci`
2. Run `npm run build` to create production bundles
3. Deploy static assets to CDN
4. Deploy server bundle to serverless functions

### Configuration Files

#### `vercel.json`

Specifies:
- Framework: Angular
- Build command and output directory
- Node.js version: 22.14.0
- Environment variables (NODE_ENV=production)
- Routing configuration for SSR

#### `.nvmrc`

Pins Node.js to 22.14.0 for consistency across all environments (local, CI/CD, Vercel)

### Build Output

The Angular build generates:

```
dist/lead-gen-landing/
├── browser/                          ← Static files (CDN)
│   ├── index.html
│   ├── styles.[hash].css
│   ├── main.[hash].js
│   └── assets/
│
└── server/                           ← SSR server
    └── server.mjs                    ← Express app
```

- **Browser files**: Optimized static assets cached globally
- **Server bundle**: Serverless function for SSR rendering

### Vercel Environment Variables

No additional environment variables needed for default setup.

**Optional environment variables:**
- `NODE_ENV=production` (set automatically by Vercel)
- Add custom vars in Vercel Dashboard → Project Settings → Environment Variables

### Deployment Triggers

Vercel automatically deploys when:
- Push to `main` branch → Production deployment
- Push to `develop` branch → Preview deployment
- Create pull request → Automatic preview URL

### Monitoring & Logs

In Vercel Dashboard:
- **Deployments**: View all deployment history
- **Functions**: Monitor serverless function execution
- **Analytics**: Check performance metrics
- **Logs**: View build and runtime logs

### Troubleshooting

#### Build Failures

Check Vercel build logs for:
- Node version mismatch (ensure 22.14.0)
- Missing dependencies (verify package-lock.json committed)
- Build errors (run `npm run build` locally first)

#### Runtime Issues

Check Vercel function logs for:
- SSR rendering errors
- Port/environment variable issues
- Express server errors

#### Performance

Monitor:
- Edge Network cache hit rate
- Function execution time
- Bundle sizes in Analytics

### Local Testing Before Deployment

Before pushing to Vercel:

```bash
# Verify Node version
node --version  # Should be 22.14.0

# Install dependencies
npm ci

# Build production
npm run build

# Test SSR server locally
npm run serve:ssr:lead-gen-landing

# Visit http://localhost:4000 to verify
```

### Continuous Integration

GitHub workflows validate:
- Code formatting (Prettier)
- TypeScript strict mode
- Template validation (AOT)
- Unit tests (Vitest)
- Security audits
- SSR server startup

**All workflows must pass before Vercel deployment.**

### Rollback

To rollback to previous deployment:
1. Vercel Dashboard → Deployments
2. Click deployment version
3. Click "Promote to Production"

### SSL/HTTPS

- ✓ Automatic SSL certificate (Let's Encrypt)
- ✓ Auto-renewal
- ✓ HTTPS enforced by default
- ✓ HSTS headers recommended (add in src/server.ts)

### Performance Optimization

Vercel provides:
- Edge Network caching
- Automatic image optimization
- Compression (gzip/brotli)
- Geographic distribution

### Cost Considerations

Vercel pricing:
- **Hobby (Free)**: Limited serverless invocations
- **Pro**: Higher execution limits
- **Enterprise**: Custom limits

Current app metrics:
- Bundle size: ~500KB (warning threshold)
- SSR functions: Minimal overhead (fast)
- Static assets: Optimized for CDN

### FAQ

**Q: Does Vercel support Angular SSR?**  
A: Yes, full support with automatic framework detection.

**Q: Will my Express server work?**  
A: Yes, Vercel wraps it in serverless functions automatically.

**Q: Can I use environment variables?**  
A: Yes, set in Vercel Dashboard under Project Settings.

**Q: How do I preview changes?**  
A: Create a PR; Vercel generates preview URLs automatically.

**Q: Can I use custom domains?**  
A: Yes, configure in Vercel Project Settings → Domains.

## Next Steps

1. Connect GitHub repository to Vercel
2. Verify `.nvmrc` is committed
3. Verify `vercel.json` is present
4. Push to main branch
5. Monitor first deployment in Vercel Dashboard
6. Test production URL

---

## Related Files

- `vercel.json` - Vercel deployment configuration
- `.nvmrc` - Node.js version pinning
- `.replit` - Replit environment (updated for Node 22)
- `src/server.ts` - Express SSR server
- `angular.json` - Angular build configuration
- `.github/workflows/ci-test-build.yml` - Build validation

---

**Last Updated**: September 2026  
**Status**: Ready for Production Deployment ✅
