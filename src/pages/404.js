import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";
import '../css/index.css';

const getImage = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  return `404-${randomNumber}.png`;
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" robots="noindex, nofollow" />
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center p-4 text-center">
        <h1 className="text-3xl leading-loose text-primary-color">Página no encontrada</h1>
        <p className="text-xl text-gray-500">Prueba a buscar en el buscador, o accede a la <Link className="text-primary-500 hover:text-primary-700 focus:text-secondary-500" to="/">página de inicio para empezar</Link></p>
      </div>
      <div className="flex justify-center">
        <picture className="relative">
          <img loading="lazy" className="flex-shrink-0 object-cover object-center w-full rounded-lg" alt="página no encontrada" src={getImage()} />
        </picture>
      </div>
    </div>
    <div className="lg:w-1/3 lg:w-1/5"/>
  </Layout>
)

export default NotFoundPage
