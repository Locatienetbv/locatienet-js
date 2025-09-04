// ../build/banner.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function banner(projectDir, pluginFilename) {
	const pkgPath = path.join(projectDir, 'package.json');
	const pkgJson = fs.readFileSync(pkgPath, 'utf8');
	const pkg = JSON.parse(pkgJson);

	const year = new Date().getFullYear();

	return `/*!
 * Locatienet ${pkg.name}${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
 * Copyright 2021-${year} ${pkg.author}
 * Licensed under ${pkg.license} (https://github.com/locatienetbv/locatienet-js/LICENSE)
 */`;
}
