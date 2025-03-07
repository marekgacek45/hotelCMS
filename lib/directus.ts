import { createDirectus, rest,  } from '@directus/sdk';

export interface ItemQuery {
    fields?: string[]
}

export const directus = createDirectus(process.env.DIRECTUS_API_ENDPOINT!).with(rest());