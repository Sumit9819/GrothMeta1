import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

const routes = [
    '/',
    '/services',
    '/work',
    '/about',
    '/blog',
    '/contact',
    '/privacy-policy'
];

async function prerender() {
    console.log('🚀 Starting prerendering...');

    // Start a preview server
    const server = await createServer({
        configFile: false,
        root: distPath,
        server: { port: 5173 }
    });

    await server.listen();
    console.log('✅ Preview server started on http://localhost:5173');

    // Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const route of routes) {
        try {
            console.log(`📄 Rendering: ${route}`);
            const page = await browser.newPage();

            // Navigate and wait for content
            await page.goto(`http://localhost:5173${route}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Additional wait for React to render
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Get the rendered HTML
            const html = await page.content();

            // Determine output path
            let outputPath;
            if (route === '/') {
                outputPath = path.join(distPath, 'index.html');
            } else {
                const routePath = path.join(distPath, route);
                if (!fs.existsSync(routePath)) {
                    fs.mkdirSync(routePath, { recursive: true });
                }
                outputPath = path.join(routePath, 'index.html');
            }

            // Write the HTML
            fs.writeFileSync(outputPath, html);
            console.log(`  ✅ Saved: ${outputPath}`);

            await page.close();
        } catch (error) {
            console.error(`  ❌ Error rendering ${route}:`, error.message);
        }
    }

    await browser.close();
    await server.close();

    console.log('🎉 Prerendering complete!');
}

prerender().catch(console.error);
