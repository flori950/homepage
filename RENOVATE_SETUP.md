# Renovate Bot Setup Guide

This guide explains how to set up and use Renovate Bot for automatically managing dependencies in your portfolio website.

## What is Renovate Bot?

Renovate Bot is an automated dependency management tool that:
- Scans your repository for outdated dependencies
- Creates pull requests with dependency updates
- Can automatically merge safe updates (patches, minor versions)
- Provides security vulnerability alerts
- Supports multiple package managers and platforms

## Files Created

1. **`renovate.json`** - Main Renovate configuration file
2. **`.renovaterc.js`** - Alternative JavaScript configuration (more flexible)
3. **`package.json`** - Node.js package file for future JavaScript dependencies
4. **`.github/workflows/renovate.yml`** - GitHub Actions workflow to run Renovate

## Setup Instructions

### Option 1: GitHub App (Recommended)

1. **Install Renovate GitHub App:**
   - Go to [GitHub Renovate App](https://github.com/apps/renovate)
   - Click "Install" and select your repository
   - This automatically runs Renovate on your repo

2. **Configure Repository Settings:**
   - The app will read your `renovate.json` configuration
   - It will create a "Dependency Dashboard" issue
   - Pull requests will be created automatically

### Option 2: Self-Hosted with GitHub Actions

1. **Create GitHub Repository:**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit with Renovate setup"
   
   # Add remote repository (replace with your repo URL)
   git remote add origin https://github.com/florian-hunter/portfolio.git
   git push -u origin main
   ```

2. **Set up GitHub Token:**
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Create a token with `repo` permissions
   - Add it as a repository secret named `RENOVATE_TOKEN`

3. **Enable GitHub Actions:**
   - The workflow in `.github/workflows/renovate.yml` will run automatically
   - You can also trigger it manually from the Actions tab

### Option 3: GitLab Setup

1. **Create `.gitlab-ci.yml`:**
   ```yaml
   renovate:
     image: renovate/renovate:latest
     script:
       - renovate
     only:
       - schedules
       - web
   ```

2. **Set up GitLab variables:**
   - Add `RENOVATE_TOKEN` with GitLab access token
   - Configure scheduled pipeline to run weekly

## Configuration Options

### Current Configuration Highlights

- **Schedule:** Runs every Monday before 6 AM (Berlin time)
- **Auto-merge:** Patch updates for stable packages (not version 0.x)
- **Grouping:** Minor and patch updates grouped together
- **Security:** High priority for vulnerability fixes
- **Stability:** 3-day waiting period for new releases

### Customizing Renovate

Edit `renovate.json` to modify:

```json
{
  "schedule": ["every weekend"],  // Change schedule
  "automerge": true,              // Enable auto-merging
  "prConcurrentLimit": 10,        // More concurrent PRs
  "labels": ["your-custom-label"] // Custom labels
}
```

### For Static Websites

Since your site is static HTML/CSS/JS, Renovate will:
- Monitor any future npm dependencies you add
- Track CDN links in HTML files (with regex managers)
- Update any Docker dependencies if you containerize
- Monitor GitHub Actions dependencies

## Adding Dependencies to Track

### JavaScript Dependencies

Add to `package.json`:
```bash
npm install --save library-name
npm install --save-dev dev-library-name
```

### CDN Dependencies in HTML

Add renovation comments:
```html
<!-- renovate: datasource=npm depName=bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

### Python Dependencies

Create `requirements.txt`:
```
flask==2.3.0
requests==2.31.0
```

## Monitoring and Management

### Dependency Dashboard

Renovate creates an issue called "Dependency Dashboard" showing:
- Pending updates
- Ignored/postponed updates
- Configuration errors

### Pull Request Management

- **Review:** Check the PR description and changelog
- **Test:** Renovate can run your CI/CD tests
- **Merge:** Auto-merge for safe updates or manual review for major changes

### Handling Conflicts

If you have merge conflicts:
1. Renovate will try to rebase automatically
2. You can manually resolve conflicts
3. Comment `@renovate rebase` to trigger a rebase

## Security Features

- **Vulnerability Alerts:** Immediate PRs for security issues
- **Stability Days:** Wait period before applying updates
- **Dependency Pinning:** Option to pin exact versions

## Best Practices

1. **Start Conservative:** Begin with manual merging, enable auto-merge later
2. **Test Integration:** Ensure your CI/CD pipeline tests Renovate PRs
3. **Monitor Dashboard:** Check the dependency dashboard weekly
4. **Group Updates:** Use grouping to reduce PR noise
5. **Schedule Wisely:** Run during low-activity periods

## Troubleshooting

### Common Issues

1. **No PRs Created:**
   - Check repository permissions
   - Verify configuration syntax
   - Look at Renovate logs in Actions

2. **Too Many PRs:**
   - Increase `prConcurrentLimit`
   - Use grouping rules
   - Adjust schedule

3. **Auto-merge Not Working:**
   - Check branch protection rules
   - Verify `platformAutomerge` setting
   - Ensure CI checks pass

### Debug Mode

Enable debug logging:
```json
{
  "logLevel": "debug"
}
```

## Next Steps

1. Push your repository to GitHub/GitLab
2. Install Renovate App or configure GitHub Actions
3. Review the dependency dashboard
4. Customize configuration based on your needs
5. Monitor the first few PRs and adjust settings

## Resources

- [Renovate Documentation](https://docs.renovatebot.com/)
- [Configuration Options](https://docs.renovatebot.com/configuration-options/)
- [Preset Configs](https://docs.renovatebot.com/presets/)
- [GitHub App](https://github.com/apps/renovate)
