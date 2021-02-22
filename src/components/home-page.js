import PropTypes from "prop-types";
import React from "react";
import EntitiesList from '../components/entities-list';
import { calculateCheaperProducts, isOdd } from '../utils/utils'
import TextBlock from "./text-block";
import ComparisonProducts from './comparison-products';
import FeatureProduct from './feature-product';
import LoadVideo from './load-video';

const HomePage = ({categories, products = [], interlinking, productsToCompare, bestProducts, tag, content = {}, image, video}) => {

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
			{(
				categories && categories.length && 
				<>
					<div className="py-12">
						<TextBlock heading={content.categories.title} text={content.categories.content} headingSize={2} />
					</div>
					<div className="mb-12">
						<EntitiesList entities={categories} dummyImage={image || {extension: 'png', src: '../../dummy-image'}} />
					</div>
				</>
        	)}
			{
				calculateCheaperProducts(products) && calculateCheaperProducts(products).length &&
				<>
					<div className="mb-12">
						<TextBlock heading={content.price.title} text={content.price.content} headingSize={2} />
					</div>
					<div className="mb-12">
						<EntitiesList entities={calculateCheaperProducts(products)} showAsProducts tag={tag} dummyImage={image || {extension: 'png', src: '../../dummy-image'}} />
					</div>
				</>
			}
			{
				content.video && content.video.content &&
				<div className="mb-12">
					<LoadVideo video={video} text={content.video.content} />
				</div>
			}
			{
				!!bestProducts.length &&
					<>
						{
							content.bestProducts ? 
								<div className="mb-12">
									<TextBlock heading={content.bestProducts.title} text={content.bestProducts.content} headingSize={2} />
								</div>
							: null
						}
						<div className="mb-12">
							{
								bestProducts.map((product, index) => (
									<FeatureProduct key={`best-product-${index}`} product={product} rowReverse={isOdd(index)} useAction tag={tag} />
								))
							}
						</div>
					</>
			}
			<div className="mb-12">
				<TextBlock heading={content.whereBuy.title} text={content.whereBuy.content} headingSize={2}  image={calculateImage()} />
			</div>
			<div className="mb-12">
				<TextBlock text={content.genericText.content} headingSize={2} />
			</div>
			{
				!!productsToCompare.length &&
					<div className="mb-12">
						<ComparisonProducts products={calculateCheaperProducts(productsToCompare, productsToCompare.length)} tag={tag} />
					</div>
			}
		</>
	)
}

HomePage.propTypes = {
	categories: PropTypes.array,
	products: PropTypes.array,
	content: PropTypes.object,
	tag: PropTypes.string
}

HomePage.defaultProps = {
	categories: [],
	products: [],
	content: ``
}

export default HomePage;