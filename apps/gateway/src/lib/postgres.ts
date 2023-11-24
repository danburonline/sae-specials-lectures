import { Pool } from 'pg'

const {
  POSTGRES_USER = 'postgres',
  POSTGRES_PASSWORD = '',
  POSTGRES_HOST = 'localhost',
  POSTGRES_PORT = '5432',
  POSTGRES_DB = 'postgres'
} = process.env

const connectionString = `postgresql://${encodeURIComponent(POSTGRES_USER)}:${encodeURIComponent(
  POSTGRES_PASSWORD
)}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`

const pool = new Pool({
  connectionString
})

// Use an IIFE to use async-await at top level
;(async () => {
  try {
    // Test the connection
    await pool.query('SELECT NOW()')
    console.log('Connected to Postgres database')
  } catch (error) {
    console.error('Database connection failed: ', error)
  }
})()

export default pool
