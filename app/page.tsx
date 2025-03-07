import Image from 'next/image'

import { getHome } from '@/lib/home'
import { getRooms, type Room } from '@/lib/rooms'
import Link from 'next/link'
import { getPages, type Page } from '@/lib/pages'

const Home = async () => {
	const data = await getHome()
	const rooms = await getRooms({
		fields: ['name', 'slug', 'thumbnail'],
	})
	const pages = await getPages({
		fields: [ 'slug'],
	})

	console.log(pages)

	return (
		<>
			<nav className='max-w-screen-xl mx-auto mt-12'>
				<ul className='flex  gap-7'>
					{Array.isArray(pages) &&
						pages.map((page: Page) => (
							<li key={page.slug}>
								<Link href={`/${page.slug}`}>{page.slug}</Link>
							</li>
						))}
				</ul>
			</nav>
			<section className='grid grid-cols-2 max-w-screen-xl mx-auto mt-24'>
				<div className='space-y-2'>
					<h1>{data.hero_title}</h1>
					<h2>{data.hero_subtitle}</h2>
					<ul className='flex justify-start items-start gap-2 mt-4'>
						{data.hero_buttons.map((button, index) => (
							<li key={button.label + index}>
								<button className='border py-2 px-4'>
									<Link href={button.link}>{button.label}</Link>
								</button>
							</li>
						))}
					</ul>
				</div>

				<Image
					src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${data.hero_cover}`}
					alt='hero cover'
					width={1000}
					height={500}
				/>
			</section>

			<section className='grid grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
				{Array.isArray(rooms) &&
					rooms.map((room: Room) => (
						<Link href={`/rooms/${room.slug}`} key={room.slug} className='space-y-2'>
							<Image
								src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${room.thumbnail}`}
								alt='room cover'
								width={1000}
								height={500}
							/>
							<h2>{room.name}</h2>
						</Link>
					))}
			</section>
		</>
	)
}

export default Home
