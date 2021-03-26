const fs = require('fs')
const path = require('path')

const descriptorDirPath = path.join(__dirname, '../ide/descriptors/uidev-component');
const descriptorPath = path.join(descriptorDirPath, 'descriptor.json');
const descriptorBundlePath = path.join(descriptorDirPath, 'descriptorBundle.json');

const descriptor = JSON.parse(fs.readFileSync(descriptorPath, 'utf-8'));

function getDataUri(imagePath) {
    try {
        const base64 = fs.readFileSync(imagePath).toString('base64');
        const ext = path.extname(imagePath).toLowerCase();
        if (ext === '.svg') {
            return 'data:image/svg+xml;base64,' + base64;
        } else {
            return 'data:image/' + ext.substr(1) + ';base64,' + base64;
        }
    } catch (err) {
        return '';
    }
}

if (descriptor.snippets) {
    descriptor.snippets.forEach(snippet => {
        if (snippet.path) {
            const templatePath = path.join(descriptorDirPath, snippet.path);
            try {
                snippet.content = fs.readFileSync(templatePath, 'utf-8');
            } catch (err) {
            }
        }
        if (snippet.icon) {
            snippet.iconDataUri = getDataUri(path.join(descriptorDirPath, snippet.icon));
        }
        if (snippet.lighticon) {
            snippet.lighticonDataUri = getDataUri(path.join(descriptorDirPath, snippet.lighticon));
        }
    });
}

fs.writeFileSync(descriptorBundlePath, JSON.stringify(descriptor));
