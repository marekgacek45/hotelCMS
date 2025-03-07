import { getRoomBySlug } from '@/lib/rooms'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }: { params: { slug: string } }) => {
	const room = await getRoomBySlug(params.slug, {
		fields: ['name', 'slug', 'thumbnail', 'description'],
	})

	console.log(room)

	return (
		<>
			<div className='max-w-screen-xl mx-auto mt-12'>
				<h1>{room.name}</h1>
				<Image
					src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${room.thumbnail}`}
					alt='room cover'
					width={700}
					height={300}
				/>

				<div
					className='prose text-white prose-h1:text-white max-w-full mx-auto w-full prose-headings:text-white'
					dangerouslySetInnerHTML={{ __html: room.description }}
				/>

				
			</div>
		</>
	)
}

export default page
