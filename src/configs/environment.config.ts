import { addEnv, checkEnvs, loadEnvs } from '../utils/env-checker.util';
import * as path from 'path';
const pack = require('../../package.json');

(() => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  const NODE_ENV = process.env.NODE_ENV;
  const envPath = path.join(__dirname, `${`../../.env.${NODE_ENV}`}`);
  loadEnvs(envPath);
})();

const configs = {
  env: addEnv({ key: 'NODE_ENV' }),
  server: {
    appName: addEnv({ key: 'APP_NAME', value: 'meliBackend' }),
    host: addEnv({ key: 'IP', value: '0.0.0.0' }),
    port: addEnv<number>({ key: 'PORT', value: '3000' }),
    name: pack.name,
    description: pack.description,
    projectVersion: pack.version,
  },
  apis: {
    meliSearch: {
      url: addEnv({ key: 'ML_SEARCH_URL', required: true }),
    },
    meliItem: {
      url: addEnv({ key: 'ML_ITEM_URL', required: true }),
    },
  }
};
checkEnvs();
export default configs;
