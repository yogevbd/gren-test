module.exports = {
  template: {
    commit: ({ message, url, author, name }) =>
      `- [${message}](${url}) - ${author ? `@${author}` : name}`,
    issue: '- {{name}} [{{text}}]({{url}})',
    label: '[**{{label}}**]',
    noLabel: 'closed',
    group: '\n#### {{heading}}\n',
    changelogTitle: '# Changelog\n\n',
    release: '## {{release}} ({{date}})\n{{body}}',
    releaseSeparator: '\n---\n\n',
  },
  groupBy: {
    'Enhancements:': ['enhancement', 'internal'],
    'Bug fixes:': ['bug'],
    Features: ['feature'],
  },
  dataSource: 'prs',
  changelogFilename: 'CHANGELOG.gren.md',
  override: true,
  generate: true,
};
