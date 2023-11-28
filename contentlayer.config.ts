// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });

// npm i short-uuid next-contentlayer contentlayer date-fns @vercel/postgres (to install content layer and uuid)

// npx contentlayer build (to build new posts)