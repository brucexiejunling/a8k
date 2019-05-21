import path from 'path';

export const TYPE_CLIENT = 'client';
export const TYPE_SERVER = 'server';
export const ENV_DEV = 'development';
export const ENV_PROD = 'production';
export const ENV_TEST = 'test';

export const PROJECT_MODE_SINGLE = 'single';
export const PROJECT_MODE_MULTI = 'multi';

let root: string;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE || process.env.APPDATA || process.env.TMP || process.env.TEMP;
} else {
  root = process.env.HOME || process.env.TMPDIR || '/tmp';
}

export const configPath = path.join(root, '.a8k.config.json');
