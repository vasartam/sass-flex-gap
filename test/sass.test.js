const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

// See: https://github.com/sass-mq/sass-mq/blob/main/test/scss.spec.js
describe('Sass', () => {
    // Find all the Sass files that end in `*.spec.scss` in any directory of this project.
    // This uses `path.resolve` because True requires absolute paths to compile test files.
    const sassTestFiles = glob.sync(
        path.resolve(process.cwd(), 'test/**/*.test.scss'),
    );

    // Run True on every file found with `describe` and `it` methods provided
    sassTestFiles.forEach((file) => sassTrue.runSass({ file }, { describe, it }));
});
