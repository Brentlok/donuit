import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            '~': path.resolve(projectRootDir, 'src')
        },
    },
    server: {
        port: 3000,
    }
};

export default config;
