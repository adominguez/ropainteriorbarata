import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { logoPosition } from "../utils/utils.js";
import TransformText from "./transform-text.js";

const Header = ({ siteTitle, logoPositionValue, useHeaderWhite, useLogo, siteLogo }) => {
  return (
    <header className={`${useHeaderWhite ? 'bg-white' : 'bg-primary-500'} principal-container`}>
      <div className={`md:justify-${logoPosition[logoPositionValue]} centered-flex p-4 w-templateValue pb-4`}>
          <Link
            to="/"
            className={`leading-none text-2xl px-3 sm:block sm:text-center no-underline outline-none ${useHeaderWhite ? 'text-primary-500' : 'text-white'} hover:text-secondary-500 focus:text-secondary-500`}
          >
            {
              useLogo && siteLogo.length ? <img loading="lazy" src="../../logo.png" alt={siteTitle} /> : <TransformText uppercaseFirstLetter text={siteTitle} />
            }
          </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoPositionValue: PropTypes.string,
  useHeaderWhite: PropTypes.bool,
  templateWidthValue: PropTypes.string,
  useLogo: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: `Default Title`,
  logoPositionValue: '50',
  useHeaderWhite: false,
  templateWidthValue: '80',
}

export default Header
