import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'

interface Home {
	hero_title: string
	hero_subtitle: string
	hero_buttons: Array<{
		label: string
		link: string
	}>
	hero_cover: string
}

export const getHome = async () => {
	return directus.request(readItems('home')) as unknown as Home
}
