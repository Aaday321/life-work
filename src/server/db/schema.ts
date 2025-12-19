// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, mysqlTableCreator } from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `lifework-app_${name}`);

export const users = createTable(
  "user",
  (d) => ({
    id: d.bigint({ mode: "number" }).primaryKey().autoincrement(),
    name: d.varchar({ length: 256 }).notNull(),
    location: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp()
      .$defaultFn(() => /* @__PURE__ */ new Date())
      .notNull(),
    updatedAt: d.timestamp().onUpdateNow(),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.bigint({ mode: "number" }).primaryKey().autoincrement(),
    userId: d.bigint({ mode: "number" }).notNull(),
    imageUrl: d.varchar({ length: 512 }),
    caption: d.text(),
    createdAt: d
      .timestamp()
      .$defaultFn(() => /* @__PURE__ */ new Date())
      .notNull(),
    updatedAt: d.timestamp().onUpdateNow(),
  }),
  (t) => [
    index("user_id_idx").on(t.userId),
    index("created_at_idx").on(t.createdAt),
  ],
);

export const comments = createTable(
  "comment",
  (d) => ({
    id: d.bigint({ mode: "number" }).primaryKey().autoincrement(),
    postId: d.bigint({ mode: "number" }).notNull(),
    userId: d.bigint({ mode: "number" }).notNull(),
    content: d.text().notNull(),
    createdAt: d
      .timestamp()
      .$defaultFn(() => /* @__PURE__ */ new Date())
      .notNull(),
    updatedAt: d.timestamp().onUpdateNow(),
  }),
  (t) => [
    index("post_id_idx").on(t.postId),
    index("user_id_idx").on(t.userId),
    index("created_at_idx").on(t.createdAt),
  ],
);
