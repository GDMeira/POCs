import { ConnectionConfig, Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const configDataBase: ConnectionConfig = {
  connectionString: process.env.DATABASE_URL
}

if (process.env.NODE_ENV === "production") configDataBase.ssl = true;

const db = new Pool(configDataBase);

db.connect((error, client, done) => {
  if (error) {
    console.error('Error connecting to PostgreSQL', error);
  } else {
    console.log('--------------- Conected to PostgreSQL');
    done();
  }
});

export default db;
