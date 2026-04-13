import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "lx7icxeu",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client