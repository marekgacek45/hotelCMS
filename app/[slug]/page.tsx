import RichText from '@/components/rich-text'
import { getPageBySlug } from '@/lib/pages'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const page = async ({ params }: { params: { slug: string } }) => {
	const page = await getPageBySlug(params.slug)

	console.log(page.blocks)

	return (
		<>
			<div className='max-w-screen-xl mx-auto mt-12'>
				<p className='text-white'>{page.slug}</p>

				{page.blocks.map(block => {
					if (block.collection === 'block_richtext') {
						return <RichText block={block} key={block.item.id} />
					}
					if (block.collection === 'block_hero') {
						return (
							<div key={block.item.id}>
								<Image
									src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${block.item.image}`}
									alt='room cover'
									width={400}
									height={300}
								/>
								<h2>{block.item.headline}</h2>
								<div
									className='prose text-white prose-h1:text-white max-w-full mx-auto w-full prose-headings:text-white'
									dangerouslySetInnerHTML={{ __html: block.item.content }}
								/>

<ul className='flex justify-start items-start gap-2 mt-4'>
						{block.item.buttons.map((button, index) => (
							<li key={button.label + index}>
								<button className='border py-2 px-4'>
									<Link href={button.href}>{button.label}</Link>
								</button>
							</li>
						))}</ul>
							</div>
						)
					}
					return null
				})}
			</div>
		</>
	)
}

export default page
