import { getCollection } from "astro:content";

const docs = await getCollection("docs");

export { docs };
