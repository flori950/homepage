/**
 * Renovate Bot Configuration
 * https://docs.renovatebot.com/configuration-options/
 */
module.exports = {
  // Extend base configurations
  extends: [
    'config:base',
    'docker:enableMajor',
    ':dependencyDashboard',
    ':semanticCommits',
    ':automergeDisabled'
  ],

  // Basic settings
  timezone: 'Europe/Berlin',
  schedule: ['before 6am on Monday'],
  
  // Repository settings
  repositories: ['florian-hunter/portfolio'],
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  
  // PR settings
  labels: ['dependencies', 'renovate'],
  assignees: ['florian-hunter'],
  reviewers: ['florian-hunter'],
  prConcurrentLimit: 5,
  prHourlyLimit: 2,
  stabilityDays: 3,
  
  // Commit message format
  commitMessagePrefix: 'chore(deps):',
  commitMessageAction: 'update',
  commitMessageTopic: '{{depName}}',
  commitMessageExtra: 'to {{newVersion}}',
  
  // Rebasing
  rebaseWhen: 'conflicted',
  
  // Lock file maintenance
  lockFileMaintenance: {
    enabled: true,
    schedule: ['before 6am on Monday']
  },
  
  // Security alerts
  vulnerabilityAlerts: {
    enabled: true,
    schedule: ['at any time']
  },
  
  // Package rules for different update types
  packageRules: [
    // Auto-merge patch updates for stable packages
    {
      description: 'Auto-merge patch updates for stable packages',
      matchUpdateTypes: ['patch'],
      matchCurrentVersion: '!/^0/',
      automerge: true,
      automergeType: 'pr',
      platformAutomerge: true
    },
    
    // Group non-major updates
    {
      description: 'Group all non-major updates together',
      matchUpdateTypes: ['minor', 'patch'],
      groupName: 'all non-major dependencies',
      groupSlug: 'all-minor-patch'
    },
    
    // Separate major updates
    {
      description: 'Separate major updates',
      matchUpdateTypes: ['major'],
      addLabels: ['major-update'],
      reviewers: ['florian-hunter']
    },
    
    // Security updates
    {
      description: 'Special handling for security updates',
      matchPackagePatterns: ['*'],
      matchCurrentVersion: '!/^0/',
      vulnerabilityAlerts: {
        enabled: true
      },
      addLabels: ['security'],
      prPriority: 10
    },
    
    // Development dependencies
    {
      description: 'Group dev dependencies',
      matchDepTypes: ['devDependencies'],
      groupName: 'dev dependencies',
      addLabels: ['dev-dependencies']
    }
  ],
  
  // Custom regex managers for HTML/CSS dependencies
  regexManagers: [
    // CDN links in HTML files
    {
      description: 'Update CDN dependencies in HTML files',
      fileMatch: ['(^|/).*\\.html$'],
      matchStrings: [
        // Match CDN links like https://cdn.jsdelivr.net/npm/package@version
        'https://cdn\\.jsdelivr\\.net/npm/(?<depName>[^@\\s]+)@(?<currentValue>[^/\\s"\']+)',
        // Match other CDN patterns
        'https://unpkg\\.com/(?<depName>[^@\\s]+)@(?<currentValue>[^/\\s"\']+)',
        // Match cdnjs links
        'https://cdnjs\\.cloudflare\\.com/ajax/libs/(?<depName>[^/]+)/(?<currentValue>[^/\\s"\']+)'
      ],
      datasourceTemplate: 'npm',
      versioningTemplate: 'npm'
    },
    
    // Custom version comments in files
    {
      description: 'Update versions marked with renovation comments',
      fileMatch: ['(^|/).*\\.(html|css|js)$'],
      matchStrings: [
        '<!-- renovate: datasource=(?<datasource>\\S+) depName=(?<depName>\\S+) -->\\s*.*?(?<currentValue>\\d+\\.\\d+\\.\\d+)'
      ]
    }
  ],
  
  // Ignore certain files/dependencies
  ignorePaths: [
    '**/node_modules/**',
    '**/bower_components/**',
    '**/vendor/**'
  ],
  
  // Custom hosts (if needed for private registries)
  hostRules: [
    // Example for GitHub Enterprise or private npm registry
    // {
    //   matchHost: 'https://npm.your-company.com',
    //   username: 'your-username',
    //   password: 'your-password'
    // }
  ]
};
