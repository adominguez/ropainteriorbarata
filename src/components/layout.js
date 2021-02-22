import React from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import Header from "./header";
import Nav from "./nav";
import SearchInput from "./search-input.js"
import CookieConsent from "react-cookie-consent";

const Layout = ({ children, cookies }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteName
          useMenu
          useHeaderWhite
          useMenuWidth
          useSidebar
          templateWidthValue
          logoPositionValue
          useLogo
          siteLogo
          useTransparentContentBackground
        }
      }
    }
  `);

  const logoPositionValue = data.site.siteMetadata?.logoPositionValue;
  const useLogo = data.site.siteMetadata?.useLogo;
  const siteLogo = data.site.siteMetadata?.siteLogo;
  const templateWidthValue = data.site.siteMetadata?.templateWidthValue;
  const useMenu = data.site.siteMetadata?.useMenu;
  const useMenuWidth = data.site.siteMetadata?.useMenuWidth;
  const useHeaderWhite = data.site.siteMetadata?.useHeaderWhite;
  const siteName = data.site.siteMetadata?.siteName;
  const useTransparentContentBackground = data.site.siteMetadata?.useTransparentContentBackground;

  return (
    <div className={`flex flex-col h-screen ${useTransparentContentBackground ? 'bg-transparent' : 'bg-backgroundSite'}`}>
      <Header logoPositionValue={logoPositionValue} useHeaderWhite={useHeaderWhite} siteTitle={siteName} useLogo={useLogo} siteLogo={siteLogo} />
      {
        useMenu ? <Nav templateWidthValue={templateWidthValue} useMenuWidth={useMenuWidth} /> : null
      }
      <main className={`overflow-y-auto`}>
        <div className={`py-4 principal-container`}>
          <SearchInput />
        </div>
        <section className={`principal-container`}>
          <div className="w-full md:w-templateValue">
            {children}
          </div>
        </section>
      </main>
      <footer className="box-border flex flex-col items-center justify-center w-full p-4 text-white bg-secondary-500">
        <div className="flex space-x-3">
          <Link to="/" className="text-primary-300 hover:text-primary-600 focus:text-primary-600">Inicio</Link>
          <Link to="/legal" className="text-primary-300 hover:text-primary-600 focus:text-primary-600">Aviso legal</Link>
          <Link to="/cookies" className="text-primary-300 hover:text-primary-600 focus:text-primary-600">Cookies</Link>
        </div>
        <div className="mt-3">© {new Date().getFullYear()}, {siteName}</div>
      </footer>
      {
        cookies &&
          <CookieConsent
            enableDeclineButton
            location="bottom"
            buttonText={cookies.button}
            declineButtonText="Declinar"
            cookieName="google-analytics">
            {cookies.content}
          </CookieConsent>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
