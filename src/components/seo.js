import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, lang='es', meta, title, robots="index, follow" }) {

  const metaDescription = description || '';
  const defaultTitle = title || '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      meta={[
        {
          name: `robots`,
          content: robots
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  robots: 'index, follow'
}

SEO.propTypes = {
  description: PropTypes.string,
  robots: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
