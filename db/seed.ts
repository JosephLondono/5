import { db, Users, Comments } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Users).values([
		{
			id: null,
			name: 'Joseph Londoño',
			email: "joal1808@gmail.com",
		},
		{
			id: null,
			name: 'Joseph Londoño',
			email: "londonoj888@gmail.com",
		}
	])

	await db.insert(Comments).values([
		{
			id: null,
			title: "Buy milk",
			description: "Buy milk from the store",
			completed: false,
			userId: 1,
			isPublic: true
		},
		{
			id: null,
			title: "Buy eggs",
			description: "Buy eggs from the store",
			completed: false,
			userId: 1,
			isPublic: false
		},
		{
			id: null,
			title: "Programming App Todo",
			description: "Programing App Todo with Astro-Auth and Astro-DB",
			completed: false,
			userId: 2,
			isPublic: false
		}
	])
}
