import PropTypes from "prop-types";
import React from "react";
import TextBlock from './text-block';
import ComparisonProducts from './comparison-products'
import {calculateCheaperProducts} from '../utils/utils';
import FeatureProduct from "./feature-product";
import EntitiesList from "./entities-list";
import LoadVideo from "./load-video";

const CategoryPage = ({content, products = [], categories, id, productsToCompare, bestProducts = [], interlinking = [], image, tag, video, name}) => {
	const {comparisonProducts = {}, featureProducts = {}, genericSpintax = {}, linkCategories = {}, productsCatalog = {}, video: videoBlock = {}} = content;

	const calculateImage = () => {
		let image = null;
		products.forEach(product => {
			if(product.images && product.images.length > 1) {
				image = product.images[0];
			}
		});
		return image;
	}
	
	return (
		<>
			{
				productsCatalog.title && productsCatalog.content && 
				<div className="py-12">
					<TextBlock heading={productsCatalog.title} text={productsCatalog.content} headingSize={2} image={calculateImage()} />
				</div>
			}
			{
				products.length > 1 &&
				<div className="mb-12">
					{products && products.length && <EntitiesList entities={products} showAsProducts dummyImage={image || {extension: 'png', src: '../../dummy-image'}} relativePath tag={tag} />}
				</div>
			}
			{
				videoBlock.content &&
				<div className="mb-12">
					<LoadVideo video={video} text={videoBlock.content} />
				</div>
			}
			{
				!!productsToCompare.length &&
					<>
						{
							comparisonProducts.title && comparisonProducts.content &&
							<div className="mb-12">
								<TextBlock heading={comparisonProducts.title} text={comparisonProducts.content} headingSize={2} />
							</div>
						}
						<div className="mb-12">
							<ComparisonProducts products={calculateCheaperProducts(productsToCompare, productsToCompare.length)} relativePath tag={tag} />
						</div>
					</>
			}
			{
				!!bestProducts.length &&
					<>
						{featureProducts.title && featureProducts.content &&
							<div className="mb-12">
								<TextBlock heading={featureProducts.title} text={featureProducts.content} headingSize={2} />
							</div>
						}
						<div className="mb-12">
							{
								bestProducts.map((product, index) => (
									<FeatureProduct key={`best-product-${index}`} product={product} useAction relativePath tag={tag} />
								))
							}
						</div>
					</>
			}
			{
				genericSpintax.content &&
					<div className="mb-12">
						<TextBlock text={genericSpintax.content} headingSize={2} />
					</div>
			}
			{
				!!interlinking.filter(item => !item.useHomePage && item.name !== name).length &&
					<>
						<div className="mb-12">
							<EntitiesList entities={interlinking.filter(item => !item.useHomePage && item.name !== name)} relativePath inverseClass dummyImage={image || {extension: 'png', src: '../../dummy-image'}} />
						</div>
					</>
			}
			{
				!!categories.filter(category => category.id !== id).length &&
					<>
						<div className="mb-12">
							<TextBlock heading={linkCategories.title} text={linkCategories.content} headingSize={2} />
						</div>
						<div className="mb-12">
							<EntitiesList entities={categories.filter(category => category.id !== id)} relativePath dummyImage={image || {extension: 'png', src: '../../dummy-image'}} />
						</div>
					</>
			}
		</>
	)
}

CategoryPage.propTypes = {
	content: PropTypes.object,
	products: PropTypes.array,
	categories: PropTypes.array,
	id: PropTypes.string,
	productsToCompare: PropTypes.array,
	bestProducts: PropTypes.array,
	interlinking: PropTypes.array,
	image: PropTypes.object,
	tag: PropTypes.string
}

CategoryPage.defaultProps = {
	content: {},
	bestProducts: [],
	interlinking: []
}

export default CategoryPage;