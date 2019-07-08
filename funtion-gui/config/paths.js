const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appBuild: resolveApp('dist/build'),
    appBuildHtml: resolveApp('dist/build/index.html'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.tsx'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    testsSetup: resolveApp('src/setupTests.ts'),
    appNodeModules: resolveApp('node_modules'),
    appTsConfig: resolveApp('tsconfig.json'),
    appTsLint: resolveApp('tslint.json'),
};