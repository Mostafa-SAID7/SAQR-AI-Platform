# Hotfix Guide - Emergency Production Fixes

## Quick Reference

When production issues need immediate fixing without waiting for normal release cycle.

## Hotfix Branch Strategy

### Branch Naming
```
hotfix/v<major>.<minor>.<patch>
```

Examples:
- `hotfix/v1.0.1` - Patch fix for v1.0.0
- `hotfix/v1.1.0` - Emergency minor feature
- `hotfix/v2.0.0` - Critical breaking fix (rare)

### Hotfix Workflow

```
main (production)
     ↑
     └─ hotfix/v1.0.1 (create fix branch)
            │
            ├─ commit: fix: critical bug description
            ├─ commit: test: add regression test
            └─ push to hotfix/v1.0.1
                     ↓
            GitHub Actions runs:
            ├─ Validate hotfix branch name
            ├─ Fast-track CI (tests + build)
            ├─ Security check
            ├─ Create release (v1.0.1 tag)
            └─ Notify merge to develop
                     ↓
            Vercel auto-deploys v1.0.1
                     ↓
            Manual: Merge hotfix → develop
```

## Step-by-Step

### 1. Create Hotfix Branch

```bash
# Check current main version
git tag -l | sort -V | tail -1

# Create from main with correct version
git checkout main
git pull origin main
git checkout -b hotfix/v1.0.1
```

### 2. Make Fix Commits

Use conventional commits:
```bash
git commit -m "fix: correct critical bug in SSR rendering"
git commit -m "test: add regression test for bug"
```

**Do NOT** include:
- Feature additions
- Refactoring
- Large code changes
- Version number changes (automatic)

### 3. Push to Hotfix Branch

```bash
git push origin hotfix/v1.0.1
```

GitHub Actions automatically:
- Validates branch name
- Runs fast-track CI (tests + build)
- Security check (npm audit + secrets)
- Creates release tag (v1.0.1)
- Notifies to merge back to develop

### 4. Monitor Deployment

1. Check GitHub Actions: workflow should complete in ~2-3 minutes
2. Vercel auto-deploys production with new version
3. Verify fix is live: check version in package.json or GitHub Releases

### 5. Backport to Develop

After production deployment confirmed working:

```bash
git checkout develop
git pull origin develop
git merge --no-ff hotfix/v1.0.1 -m "merge: hotfix v1.0.1 back to develop"
git push origin develop
```

Or via GitHub PR:
1. Create PR: `hotfix/v1.0.1` → `develop`
2. Add description: "Backporting production hotfix"
3. Get approval
4. Merge with "Create merge commit"
5. Delete branch

### 6. Delete Hotfix Branch

```bash
git branch -d hotfix/v1.0.1
git push origin --delete hotfix/v1.0.1
```

## What Gets Automated

✅ **Automatic** (no manual steps):
- Branch name validation
- Fast-track CI pipeline
- Security checks
- Version bump calculation (PATCH)
- Git tag creation (v1.0.1)
- GitHub Release creation
- CHANGELOG.md update
- Vercel deployment

⚠️ **Manual** (required):
- Merge hotfix back to develop
- Branch deletion
- Post-deployment verification

## Hotfix vs Normal Release

| Aspect | Hotfix | Normal |
|--------|--------|--------|
| Branch source | main | develop |
| Trigger | Emergency | Scheduled/planned |
| CI Speed | Fast-track (~2 min) | Full (~10 min) |
| Version bump | PATCH | MINOR/MAJOR |
| Deployment | Immediate | After merge to main |
| Backport needed | YES (to develop) | NO |

## Hotfix Checklist

Before pushing hotfix branch:

- [ ] Issue clearly identified and reproducible
- [ ] Fix is minimal and focused
- [ ] Tests added/updated for regression
- [ ] No breaking changes
- [ ] Commit messages follow conventional format
- [ ] Build passes locally: `npm run build`
- [ ] Tests pass locally: `npm test -- --run`
- [ ] No secrets in code: `npx trufflesecurity scan .`

After hotfix released:

- [ ] Vercel deployment shows new version
- [ ] Fix verified in production
- [ ] GitHub Release created with notes
- [ ] Merged back to develop
- [ ] Hotfix branch deleted
- [ ] Team notified of hotfix

## Security During Hotfix

Hotfix workflow includes:
- ✅ TruffleHog secrets scanning
- ✅ npm audit for vulnerabilities
- ✅ Full build validation
- ✅ SSR server startup test

**Never commit secrets** even in hotfixes!

## Emergency Hotfix Scenarios

### Scenario 1: Production down
```
hotfix/v1.0.1 → Fast CI → v1.0.1 release → Vercel deploy → Live (5 min)
```

### Scenario 2: Critical bug
```
hotfix/v1.0.1 → All checks pass → Release → Backport to develop
```

### Scenario 3: Security issue
```
hotfix/v1.0.1 → Security audit passes → Release → Notify security team
```

## Rollback Procedure

If hotfix causes new issues:

```bash
# Rollback to previous version
git checkout main
git reset --hard v1.0.0
git push -f origin main

# Vercel auto-deploys v1.0.0
```

**Then**:
1. Investigate root cause
2. Create new hotfix branch
3. Fix properly
4. Re-release

## FAQ

**Q: Can I include features in hotfix?**  
A: No. Hotfixes are bug fixes only (fix: commits). Features use normal release cycle.

**Q: What if tests fail in hotfix?**  
A: Fix locally, commit, push again. Workflow reruns automatically.

**Q: Can hotfix be from develop?**  
A: No, always from main. Hotfix is emergency production patch only.

**Q: Do I need approval for hotfix?**  
A: GitHub Actions validates automatically. Manual approval needed for backport to develop.

**Q: How long to deploy hotfix?**  
A: ~5-10 minutes (validation + CI + release + Vercel deploy).

## Contacts

- **Production Issues**: Use hotfix workflow (automated)
- **Questions**: See CONTRIBUTING.md
- **Security Issues**: See SECURITY.md

---

**Last Updated**: September 2026  
**Status**: Production Ready ✅
