const path = require('path');

class PathUtils {

    constructor() { }

    getJoinPath(data) {
        const { targetPath, targetName } = data;
        // Check if the targetPath parameter was received.
        if (!targetPath) {
            throw new Error(`targetPath not received: ${targetPath} (1000013)`);
        }
        return path.join(targetPath, targetName);
    }

    getBasename(source) {
        return path.basename(source);
    }
}

module.exports = new PathUtils();