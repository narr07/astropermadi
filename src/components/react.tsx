import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface PostData {
  post: {
    title: string
    posted: string
    body: any // Rich Text di Tina CMS biasanya disimpan sebagai `any`
  }
}

export function MyComponent(props: { query: string, variables: object, data: PostData }) {
  const { data } = useTina(props)

  return (
    <article style={{ margin: '50px auto', width: '800px', lineHeight: '1.6' }}>
      <h1>{data.post.title}</h1>
      <p>
        <em>
          Diposting pada:
          {new Date(data.post.posted).toLocaleDateString()}
        </em>
      </p>
      <TinaMarkdown content={data.post.body} />
    </article>
  )
}
