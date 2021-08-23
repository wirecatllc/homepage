import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "@layouts/default"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
          <title>Home Page</title>
      </Helmet>
      <div class="outer">
      <div class="middle">
        <div class="inner">
          
          <p>Coming Soon...</p>
        </div>
      </div>
    </div>
    </Layout>
  )
}



export default IndexPage
