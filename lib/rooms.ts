import { directus, type ItemQuery } from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

export interface Room {
	name: string
	slug: string
	thumbnail: string
    description: string
}

export const getRooms = async (options: ItemQuery)  => {
	return directus.request(readItems('rooms', options)) as unknown as Room
}

export const getRoomBySlug = async (slug: string, options: ItemQuery) => {
	return directus.request(readItem('rooms', slug, options)) as unknown as Room
}
