import meta from '$lib/data/meta'

const title = (name?: string) => [meta.name, 'CV', name].filter((i) => i).join(' | ');

export default title
