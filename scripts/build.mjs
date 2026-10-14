import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js']) await copyFile(name, `dist/${name}`);
await cp('assets/images', 'dist/assets/images', { recursive: true, filter: (source) => !/\.(md|json)$/.test(source) && !source.endsWith('galeria.html') });
console.log('Site pronto em dist/');
