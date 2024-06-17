const isTabInView = () => !document.hidden;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;