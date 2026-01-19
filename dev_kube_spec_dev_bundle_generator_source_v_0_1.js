/*
 Dev-KubeSpec-Dev-Bundle Offline gitQuantum v0.1.0 OS Android Parallel Dimensions
 Originally Developed By Zaccharin Thibodeau – Creator of gitQuantum & Probability Cloud (gitQuantum.com@gmail.com | com.gitQuantum.os.apps@gmail.com)
 Contact: gitQuantum.com@gmail.com
*/

// Entry point: build.js
import { fetchOpenAPI } from './scripts/fetch-openapi.js';
import { buildKinds } from './scripts/build-kinds.js';
import { buildYamlExamples } from './scripts/build-yaml-examples.js';
import { buildDiffs } from './scripts/build-diff.js';
import { buildSearch } from './scripts/build-search-index.js';
import { buildTabs } from './scripts/build-tabs.js';
import { writeManifest } from './scripts/manifest.js';

const version = process.argv[2] || 'v1.29.0';
const os = process.env.GQ_OS || 'gitQuantum v0.1.0 OS Android Parallel Dimensions';

await fetchOpenAPI(version);
await buildKinds(version);
await buildYamlExamples();
await buildDiffs();
await buildSearch();
await buildTabs();
await writeManifest({ version, os });

console.log('✔ Dev-KubeSpec-Dev-Bundle build complete');
