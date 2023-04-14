import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const AboutPage : React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>Maikel The Dev</h1>
      <p>Some about page</p>
          </main>
  )
}

export default AboutPage 

export const Head: HeadFC = () => <title>About</title>
