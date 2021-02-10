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
    meli: {
      url: addEnv({ key: 'ML_API_URL', required: true }),
      region: addEnv({ key: 'ML_REGION', required: true }),
      limit: addEnv({ key: 'ML_LIMIT', required: true }),
    },
  }
};
checkEnvs();
export default configs;
