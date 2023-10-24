import { sqliteTable, text, index } from "drizzle-orm/sqlite-core";
import { createId } from '@paralleldrive/cuid2';

export const todos = sqliteTable(
  "todos",
  {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    name: text("name").notNull(),
  },
  (todos) => ({
    nameIdx: index("name_idx").on(todos.name),
  })
);
