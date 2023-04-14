import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const PostsPage : React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>Maikel The Dev</h1>
      <p>Some blog page</p>
          </main>
  )
}

export default PostsPage 

export const Head: HeadFC = () => <title>Blog</title>