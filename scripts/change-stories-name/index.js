const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(process.cwd(), 'src'); // <-- путь от корня проекта

function renameStoriesFilesRecursively(dir) {
    if (!fs.existsSync(dir)) {
        console.error(`Directory not found: ${dir}`);
        return;
    }

    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            renameStoriesFilesRecursively(fullPath);
        } else if (
            entry.isFile()
            && entry.name.endsWith('.tmpstories.tsx')
        ) {
            const newName = entry.name.replace('.tmpstories.tsx', '.stories.tsx');
            const newPath = path.join(dir, newName);

            fs.renameSync(fullPath, newPath);
            console.log(`Renamed: ${fullPath} → ${newPath}`);
        }
    });
}

renameStoriesFilesRecursively(SRC_DIR);
