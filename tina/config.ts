/* eslint-disable node/prefer-global/process */
import { defineConfig } from 'tinacms'

const branch
  = process.env.GITHUB_BRANCH
  || process.env.VERCEL_GIT_COMMIT_REF
  || process.env.HEAD
  || 'main'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'posted',
            label: 'Date Posted',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            // Navigasikan ke halaman posting berdasarkan nama file
            return `/posts/${document._sys.filename}`
          },
        },
      },
    ],
  },
})
