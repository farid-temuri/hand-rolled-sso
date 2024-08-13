import { defineConfig } from 'drizzle-kit'

function getCredentials() {
  return {
    host: process.env.POSTGRESQL_HOST || '',
    port: Number(process.env.POSTGRESQL_PORT) || 0,
    database: process.env.POSTGRESQL_DBNAME || '',
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    ssl: false,
  } as const
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  dbCredentials: getCredentials(),
})
