import { db, Authors, Comments } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Authors).values([
		{
			name: 'Alice',
		},
		{
			name: 'Bob',
		}
	])

	await db.insert(Comments).values([
		{
			title: "Buy milk",
			description: "Buy milk from the store",
			completed: false,
			authorId: 1
		},
		{
			title: "Buy eggs",
			description: "Buy eggs from the store",
			completed: false,
			authorId: 1
		},
		{
			title: "Buy bread",
			description: "Buy bread from the store",
			completed: false,
			authorId: 2
		}
	])
}
