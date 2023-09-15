import pg, { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const db : Pool = new Pool({
  host: "bubble.db.elephantsql.com",
  port: 5432,
  user: "lhotaajq",
  password: "4lkiwetSiOnJ0iXheG-56yd8H8WRWhOd",
  database: "lhotaajq",
  ssl:false
})

db.connect((error, client, done) => {
  if (error) {
    console.error('Error connecting to PostgreSQL', error);
  } else {
    console.log('--------------- Conected to PostgreSQL');
    done();
  }
});

export default db;
