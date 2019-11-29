import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from 'cloudinary-react'

const ProductsPage = ({ data }) => {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="product-list">
      {products.map(({ node }) => {
        return (
          <Link
            key={node.fields.slug}
            to={node.fields.slug}
            className="block rounded-lg shadow hover:shadow-2xl"
          >
            <div className="relative pb-full">
              <Image
                cloudName="tamas-demo"
                publicId={node.frontmatter.image}
                width="300"
                height="210"
                crop="fill"
                fetchFormat="auto"
                gravity="auto"
                quality="auto"
                secure="true"
                className="object-cover"
              ></Image>
            </div>
            <div className="bg-white p-4">
              <div className="font-bold text-2xl">
                {node.frontmatter.name}
              </div>
              <div className="font-semibold text-l">
                £{node.frontmatter.price}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsPage

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          name
          price
          image
        }
      }
    }
  }
}
`