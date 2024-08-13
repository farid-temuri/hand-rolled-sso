import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import { creds } from '../../drizzle.config'
import * as schema from './schema'

// TODO make initialization callble
const client = new Client(creds[0])

await client.connect()

export const db = drizzle(client, { schema, logger: true })
