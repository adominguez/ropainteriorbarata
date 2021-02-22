import PropTypes from "prop-types";
import React from "react";
import ProductsStars from "./product-stars";
import { isOdd } from "../utils/utils";

const ComparisonProducts = ({ products, informationButtonText, relativePath, tag }) => {

	const renderTableAttributes = () => {
		const { productData } = products[0];
		return (
			<div className="mt-px overflow-hidden border-t border-b border-l border-gray-300 rounded-tl-lg rounded-bl-lg">
				<p className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-textColor-500 bg-gray-200`}>Producto</p>
				<p className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-textColor-500 bg-white`}>Precio</p>
				<p className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-textColor-500 bg-gray-200`}>Valoración</p>
				{
					productData.map((product, index) => (
						<p key={`productData-${index}`} className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-textColor-500 ${isOdd(index) ? 'bg-gray-200' : 'bg-white'}`}>{product.key}</p>
					))
				}
			</div>
		)
	}

	const renderProductData = (productData) => {
		return (
			productData.map((data, dataIndex) => (
				<p key={`product-data-${dataIndex}`} className={`h-12 px-4 -mt-px leading-10 truncate border-gray-300 text-textColor-500 text-center ${isOdd(dataIndex) ? 'bg-gray-200' : 'bg-white'}`}>{data.value}</p>
			))
		)
	}

	const renderProductInformation = () => {
		return (
			products.map((product, key) => (
				<div key={`product-${key}`} className={`w-full mb-10 border-2 border-gray-300 rounded-lg lg:w-1/${products.length} lg:mt-px lg:mb-0 lg:border-none lg:rounded-none`}>
					<div className={`flex flex-col items-center justify-center h-48 px-2 text-center bg-white rounded-t-lg ${key === 0 ? 'lg:rounded-tl-lg' : ''} ${key === products.length - 1 ? 'lg:rounded-tr-lg' : ''}`}>
						<picture>
							<source media="(max-width: 480px)" srcSet={`${product.featureImage.src}._AC_SY400_.${product.featureImage.extension}`}></source>
							<source media="(max-width: 768px)" srcSet={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`}></source>
							<img loading="lazy" className="flex-shrink-0 object-cover object-center h-44" src={`${product.featureImage.src}._AC_SY300_.${product.featureImage.extension}`} alt={product.name} />
						</picture>
					</div>
					<p className="h-12 px-4 -mt-px leading-10 text-center truncate bg-gray-200 border-t border-gray-300 text-textColor-500" title={product.name}>{product.name}</p>
					<p className="flex items-center justify-center h-12 text-xl text-center bg-white text-primary-500">{product.price.replace('.', ',')}</p>
					<p className="flex items-center justify-center h-12 text-center bg-gray-200 text-textColor-500"><ProductsStars amazonRate={product.amazonRate} amazonRatings={product.amazonRatings} /></p>
					{renderProductData(product.productData)}
					<div className="p-6 text-center border-t border-gray-300 rounded-bl-lg centered-flex">
						<a className="flex items-center w-auto px-4 py-2 mt-auto text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700" href={`${relativePath ? '../' : ''}goto?url=${product.link}&tag=${tag}`} target="_blank" rel="nofollow noopener noreferrer">
							{informationButtonText}
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			))
		)
	}

	return (
		<div className="container flex flex-wrap px-4">
			<div className="hidden mt-48 lg:w-1/4 lg:block">
				{renderTableAttributes()}
			</div>
			<div className="flex flex-wrap w-full border-gray-300 rounded-lg lg:w-3/4 lg:border">
				{renderProductInformation()}
			</div>
		</div>
	)
}

ComparisonProducts.propTypes = {
	products: PropTypes.array,
	informationButtonText: PropTypes.string,
	relativePath: PropTypes.bool,
	tag: PropTypes.string
}

ComparisonProducts.defaultProps = {
	products: [],
	informationButtonText: 'Ver más información',
	relativePath: false
}

export default ComparisonProducts;