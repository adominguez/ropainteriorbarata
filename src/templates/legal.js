import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import TextBlock from "../components/text-block";
import '../css/index.css';

const content = {
  identifySite: {
    title: "datos identificativos",
    content: `Se informa al USUARIO de que el sitio que está visitando es un sitio web personal de información sobre diferentes tipos de productos. La mayor parte de los productos que aparecen en este sitio pueden encontrarse en la plataforma de venta online conocida como Amazon. Por lo tanto, la mayor parte de los productos que se pueden encontrar en el sitio tienen enlace directo hasta dicha platforma.`
  },
  condition: {
    title: "Condición de usuario",
    content: `<p>El acceso y uso de la Web, atribuye la condición de USUARIO, aceptándose desde ese momento los presentes términos de uso.</p><p>El sitio ofrece la posibilidad de acceder de manera totalmente gratuita a toda la información en él aparece, y a través del cual se pretende informar al usuario de contenido acerca de la temática del mismo</p>`
  },
  use: {
    title: "Uso del sitio web",
    content: `<p>El USUARIO se compromete, por el mero hecho de acceder a la Web y de su utilización a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de la misma, y con carácter enunciativo pero no limitativo, a no emplearlos para</p><ul><li>incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li><li>difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li><li>provocar daños en los sistemas físicos (hardware) y lógicos (software) del sitio, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas de hardware o software que sean susceptibles de provocar los daños anteriormente mencionados.</li><li>No está permitida la reproducción de los contenidos (de cualquier tipo) publicados en esta web sin el consentimiento expreso del autor de dicha web. En este caso hablamos de textos, gráficos, código fuente, y cualquier otro contenido que sea servido desde esta página web.</li></ul>`
  }
}

export default ({ pageContext: { cookies } }) => {
  return (
    <Layout cookies={cookies}>
      <SEO title="aviso legal" robots="noindex, nofollow" />
        <div className="mb-12">
          <TextBlock heading={content.identifySite.title} text={content.identifySite.content} headingSize={1} />
        </div>
        <div className="mb-12">
          <TextBlock heading={content.condition.title} text={content.condition.content} headingSize={1} />
        </div>
        <div className="mb-12">
          <TextBlock heading={content.use.title} text={content.use.content} headingSize={1} />
        </div>
    </Layout>
  )
};