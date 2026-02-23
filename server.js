// Simple HTTP server for 501 Tools
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4501;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Default to index.html for root path
    let filePath = req.url === '/' ? '/index.html' : req.url;

    // Security: prevent directory traversal
    filePath = filePath.replace(/\.\./g, '');

    // Get absolute path
    const absolutePath = path.join(__dirname, filePath);

    // Get file extension
    const extname = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(absolutePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                // Server error
                res.writeHead(500);
                res.end('Server Error: ' + error.code, 'utf-8');
            }
        } else {
            // Success - serve the file
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║         726 TOOLS SERVER RUNNING!          ║
║                                            ║
║   🚀 Server running at:                    ║
║   http://localhost:${PORT}                   ║
║                                            ║
║   📁 Serving from:                         ║
║   ${__dirname}
║                                            ║
║   Press Ctrl+C to stop the server          ║
║                                            ║
╚════════════════════════════════════════════╝
    `);
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`
❌ ERROR: Port ${PORT} is already in use!

   Try one of these solutions:
   1. Stop the other process using port ${PORT}
   2. Or use a different port by editing server.js
        `);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down server gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
