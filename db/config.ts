import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true , autoIncrement: true }),
    name: column.text(),
    email: column.text(),
  }
})

const Comments = defineTable({
  columns: { 
    id: column.number({ primaryKey: true , autoIncrement: true }),
    title: column.text(),
    description: column.text(),
    completed: column.boolean(),
    userId: column.number({ references: () => Users.columns.id }),
    isPublic: column.boolean({ default: true })
  }
})


export default defineDb({
  tables: { Users , Comments }
});
