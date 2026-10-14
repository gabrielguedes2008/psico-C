import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const args = process.argv.slice(2);
const port = Number(args[args.indexOf('--port') + 1]) || 5173;
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const target = path.resolve(root, relative);
    if (!target.startsWith(root + path.sep) || relative.split(/[\\/]/).some(part => part.startsWith('.')) || !['index.html', 'styles.css', 'app.js'].includes(relative) && !relative.startsWith('assets/images/')) {
      response.writeHead(403); response.end('Forbidden'); return;
    }
    if (!(await stat(target)).isFile()) throw new Error('Not a file');
    response.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    response.end(await readFile(target));
  } catch {
    response.writeHead(404); response.end('Not found');
  }
});
server.on('error', error => { console.error(error.message); process.exit(1); });
server.listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port}`));
