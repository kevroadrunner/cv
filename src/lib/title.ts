import meta from '$lib/data/meta'

const title = (name?: string) => [name, 'CV', meta.name].filter(i => i).join(' | ')

export default title
