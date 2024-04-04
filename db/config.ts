import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Authors = defineTable({
  columns: {
    id: column.number({ primaryKey: true , autoIncrement: true }),
    name: column.text(),
  }
})

const Comments = defineTable({
  columns: { 
    title: column.text(),
    description: column.text(),
    completed: column.boolean(),
    authorId: column.number({ references: () => Authors.columns.id }),
  }
})


export default defineDb({
  tables: { Authors , Comments }
});
