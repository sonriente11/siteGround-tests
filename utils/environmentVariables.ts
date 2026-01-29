import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const BASE_URL = process.env.BASE_URL;
export const DEMO_TOKEN = process.env.DEMO_TOKEN; 