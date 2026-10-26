import 'dotenv/config'
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_SERVICE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool