import PropTypes from "prop-types";
import React, { useLayoutEffect }  from "react";
import $ from 'jquery';
import TransformText from './transform-text';

const AmazonSearch = ({keyword, buttonText, amazonSearchText, brands, showBrands, tagAffiliate, country, initialMin, initialMax, currency, min, max }) => {
    const goToAmazon = () => {
        const firstPrice = `p_36%3A${$("#slider-range").slider("values", 0)}00-`;
        const secondPrice = `${$("#slider-range").slider("values", 1)}00`;
        let selectedBrand = '';
        if(isBrands()) {
          selectedBrand = `p_89%3A${document.querySelector('#brandsList').value}%2C`;
        }
        const host = window.location.origin;
        const url = `${host}/goto?url=https://amazon.${country.toLowerCase()}/keyword=${keyword}&rh=${selectedBrand}${firstPrice}${secondPrice}&linkCode=ll2&tag=${tagAffiliate}`
        window.open(url, '_blank');
    }

    useLayoutEffect(() => {
        $("#amount").val(initialMin + currency + " - " + initialMax + currency);
        if (typeof navigator !== `undefined`) {
            require("jquery-ui/ui/widgets/slider")
            require("jquery-ui/themes/base/theme.css")
            require("jquery-ui/themes/base/slider.css")
          }
        $('#slider-range').slider({
            range: true,
            min: min,
            max: max,
            values: [initialMin, initialMax],
            slide: function (event, ui) {
              $("#amount").val(ui.values[0] + currency + " - " + ui.values[1] + currency);
            }
        });
    }, []);

    const isBrands = () => {
        return !!brands.length && showBrands;
    }

    return (
        <div className="flex-col self-center w-full p-4 text-center text-white centered-flex bg-secondary-500 md:w-amazonValue">
            {
                amazonSearchText ?
                <p>{amazonSearchText}</p>
            :
                <>
                    <h1 className="text-3xl font-medium sm:text-4xl title-font">
                        <TransformText text={keyword} uppercaseFirstLetter />
                    </h1>
                </>
            }
            {
                isBrands() &&
                <select id="brandsList" name="marcas">
                {
                    brands.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
                </select>
            }
            <label htmlFor="amount">Encuentra los mejores productos</label>
            <input type="text" id="amount" name="amount" readOnly className="w-full mt-2 mb-5 text-2xl font-bold text-center text-white bg-transparent border-0" disabled />
            <div id="slider-range" className="w-full slider-range" />
            <button className="p-4 mx-auto mt-5 text-2xl text-white rounded-md cursor-pointer bg-primary-500 hover:bg-primary-700 focus:bg-primary-700" onClick={goToAmazon}>{buttonText}</button>
        </div>
)}

AmazonSearch.propTypes = {
    keyword: PropTypes.string,
    buttonText: PropTypes.string,
    amazonSearchText: PropTypes.string,
    brands: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    showBrands: PropTypes.bool,
    initialMin: PropTypes.number,
    initialMax: PropTypes.number,
    currency: PropTypes.string,
    tagAffiliate: PropTypes.string,
    country: PropTypes.string,
    relativePath: PropTypes.bool
}

AmazonSearch.defaultProps = {
    buttonText: 'Buscar',
    brands:[],
    min:0,
    max:1000,
    initialMin: 50,
    initialMax: 900,
    currency: '€',
    country: 'es',
    relativePath: false
}

export default AmazonSearch
