import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import TextBlock from "../components/text-block";
import '../css/index.css';

export default ({ pageContext: { cookies } }) => {
  return (
    <Layout cookies={cookies}>
      <SEO title={cookies.title} robots="noindex, nofollow" />
        <div className="mb-12">
          <TextBlock heading={cookies.title} text={cookies.text} headingSize={1} />
        </div>
    </Layout>
  )
};