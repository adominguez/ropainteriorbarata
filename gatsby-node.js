const axios = require('axios');

const opts = {
  userId: `JBEqCPjH5HQUBNcmUAjDr8wDW8L2`,
  siteId: `f4n8b0go1dv`,
}

const get = ({query, url}) => axios.get(`https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/${url}/${opts.userId}/${opts.siteId}${query ? '?' + query : ''}`);

const getThirdServices = ({url, param}) => axios.get(`https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/${url}/${opts.userId}/${param}`);

const getDataByEntity = async ({query, url}) => {
  return await new Promise(async (resolve) => {
    const { data} = await get({query, url});
    resolve(data);
  });
}

const getThirdServicesByEntity = async ({url, param}) => {
  return await new Promise(async (resolve) => {
    const {data} = await getThirdServices({url, param})
    resolve(data);
  })
}

exports.createPages = async ({
  actions: { createPage }}) => {
  const urlSite = 'site';
  const urlTagAmazon = 'amazon-tag'
  const {design, categories, keywords, amazon, cookies, legal = {}} = await getDataByEntity({url: urlSite});
  const { tag } = await getThirdServicesByEntity({url: urlTagAmazon, param: amazon });
  const allPages = await categories.concat(keywords);
  // Create a page for each page.
  await Promise.all(allPages.map(async page => {
    const { relatedProductsAsin = [], interlinking : links = [], video } = page;
    let products = [];
    if(relatedProductsAsin.length) {
      const query = `products=${relatedProductsAsin.join(',')}`;
      const url = 'products-by-asin';
      products = await getDataByEntity({url, query});
    }
    let interlinking = [];
    if(links.length) {
      const query = `keywords=${links.join(',')}`;
      const url = 'keywords-by-id';
      interlinking = await getDataByEntity({url, query}) || [];
    }
    await createPage({
      path: page.useHomePage ? `/` : `/${page.url}`,
      component: require.resolve('./src/templates/page.js'),
      context: {
        page,
        design,
        categories,
        products,
        tag,
        interlinking,
        video,
        cookies
      }
    });
  }));
  await createPage({
    path: 'cookies',
    component: require.resolve('./src/templates/cookies.js'),
    context: {
      cookies
    }
  });
  await createPage({
    path: 'legal',
    component: require.resolve('./src/templates/legal.js'),
    context: {
      legal,
      cookies
    }
  });
};