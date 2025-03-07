import { directus, type ItemQuery } from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

export interface Page {
	title: string
	slug: string
}

export const getPages = async (options: ItemQuery) => {
	return directus.request(readItems('pages', options)) as unknown as Page
}

// export const getPageBySlug = async (slug: string, options: ItemQuery) => {
// 	return directus.request(readItem('pages', slug, options)) as unknown as Page
// }

export const getPageBySlug = async (slug: string) => {
	const pages = await directus.request(readItems('pages', {
		filter: {
			slug: { _eq: slug },
		},
		fields: [
			'*',
			{
				blocks: [
					'*',
					{
						item: {
							block_hero: ['*'],
							block_cardgroup: ['*'],
							block_richtext: ['*'],
						},
					},
				],
			},
		],
		limit: 1,
	})) as unknown as Page

    return pages[0]
}
