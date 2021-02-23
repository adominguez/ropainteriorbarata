import React, { useEffect, useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/text-block";
import '../css/index.css';

const Goto = ({location}) => {
    const [urlToRedirect, setUrlToRedirect] = useState(null);
    const [count, setCount] = useState(4);
    const { host } = location;
    
    useEffect(() => {
        const { search } = location;
        const searchSplitted = search.split('?url=');
        if(searchSplitted.length > 1) {
            let url = ''
            if(searchSplitted[1].includes('keyword')) {
                url = searchSplitted[1].split('/keyword=')
                setUrlToRedirect(`${url[0]}/s?k=${url[1]}`);
            } else {
                url = searchSplitted[1].split('&tag=')
                setUrlToRedirect(`${url[0]}/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=${url[1]}`);
            }
        } else {
            window.location = '/';
        }
        const timeout = setTimeout(() => {
            const newCount = count - 1;
            if(newCount === 0) {
                window.location = urlToRedirect;
            } else {
                setCount(newCount);
            }
        }, 1000);
        return () => clearTimeout(timeout);
    },[count]);

    const text = `La información que estás solicitando se encuentra fuera de este sitio. Vas a salir de ${host} para ver lo que estás buscando.
    Recuerda que siempre puedes volver a ${host} para seguir viendo más información.`;

    return (
        <Layout>
            <SEO title={`Redireccionando en ${count}`} robots="noindex, nofollow" />
            <div className="mb-12">
                <TextBlock heading={`Estás siendo redireccionado fuera del sitio`} text={text} headingSize={1} />
                <p className="px-4 text-xl text-textColor-500 ">Redireccionado en {count}</p>
            </div>
        </Layout>
    )
}

export default Goto
