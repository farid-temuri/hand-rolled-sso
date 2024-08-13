import { pgTable, serial } from 'drizzle-orm/pg-core'

export const userTable = pgTable('user_table', {
  id: serial('id').primaryKey(),
})
