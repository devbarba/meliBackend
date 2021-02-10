import { config } from 'dotenv';
import * as fs from 'fs';

const missingTags: string[] = [];
interface AddEnv { key: string; value?: any; required?: boolean; }

export function loadEnvs(envPath: string) {
  console.log(`[meliBackend] Current environment: ${process.env.NODE_ENV}`);

  if (fs.existsSync(envPath)) {
    config({ path: envPath });
  } else {
    console.log(`[meliBackend] ${envPath}`);
    console.log('[meliBackend] Not found, load by environment variables');
  }
}

export function addEnv<T = string>({ key, value = '', required = true }: AddEnv): T {
  if ((process.env[key] === undefined || process.env[key] === '') && value === '' && required) {
    missingTags.push(key);
  }
  const getValue = (key: string, value: T) => {
    const valueRaw = process.env[key] || value;
    if (valueRaw === 'true') {
      return true;
    }

    if (valueRaw === 'false') {
      return false;
    }

    if (!isNaN(Number(valueRaw))) {
      return Number(valueRaw);
    }

    return <T> valueRaw;
  };

  return (getValue(key, value)) as T;
}

export function checkEnvs({ exit }: { exit: boolean } = { exit: false }) {
  if (missingTags.length > 0) {
    console.error('[meliBackend] We need all required environment variables, missing:');

    for (const tag of missingTags) {
      console.error(`[meliBackend]\x1b[32m- ${tag}`);
    }

    if (exit) {
      process.exit(1);
    }
  }
}

export default {
  addEnv,
  checkEnvs,
  loadEnvs,
};
