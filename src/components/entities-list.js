import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import ProductActionPrice from './product-action-price';
import TransformText from '../components/transform-text';

const EntitiesList = ({entities, relativePath, inverseClass, showAsProducts, numberOfEntities, dummyImage = {}, tag}) => {

	const setImageInformation = (entity, type) => {
		if(showAsProducts) {
			return entity.featureImage ? entity.featureImage[type] : dummyImage[type];
		} else {
			return entity.image ? entity.image[type] : dummyImage[type];
		}
	}

	const setUrlInformation = (entity) => {
		if(showAsProducts) {
			return `${relativePath ? '../' : ''}goto?url=${entity.link}&tag=${tag}`;
		} else {
			return `${relativePath ? '../' : ''}${entity.url}`
		}
	}

	const templateHigherTen = (entity, index) => {
		return (
			<div key={`${index}-item-${showAsProducts ? entity.asin : entity.id}`} className={`p-4 ${entities.length % 3 === 0 ? 'xl:w-1/3' : 'xl:w-1/4'} w-full md:w-1/2`}>
				{
					showAsProducts ?
						<a className={`flex-col p-2 overflow-hidden border border-gray-300 rounded-lg ${inverseClass ? 'hover:border-secondary-300 focus:border-secondary-500' : 'hover:border-primary-300 focus:border-primary-500'} outline-none centered-flex h-96 bg-white`} href={setUrlInformation(entity)} target="_blank" rel="nofollow noopener noreferrer">
							<div className="items-center flex-grow overflow-hidden flex-2 centered-flex">
								<picture>
									<source media="(max-width: 480px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY400_.${setImageInformation(entity, 'extension')}`}></source>
									<source media="(max-width: 768px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`}></source>
									<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" src={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`} alt={entity.name} />
								</picture>
							</div>
							<div className="flex-1">
								<h3 className={`text-lg font-medium ${inverseClass ? 'text-primary-500' : 'text-secondary-500'} title-font truncate-2-lines`} title={entity.name}><TransformText uppercaseFirstLetter text={entity.name}/></h3>
								{
									showAsProducts ?
									<div className="mt-2"><ProductActionPrice buttonText="Más info" hideAmazonRatings hideAmazonRate product={entity} tag={tag} /></div>
									: <p className="text-base leading-relaxed text-textColor-500 truncate-3-lines"><TransformText uppercaseFirstLetter text={entity.description}/></p>
								}
							</div>
						</a>
					:
						<Link className={`flex-col p-2 overflow-hidden border border-gray-300 rounded-lg ${inverseClass ? 'hover:border-secondary-300 focus:border-secondary-500' : 'hover:border-primary-300 focus:border-primary-500'} outline-none centered-flex h-96 bg-white`} to={setUrlInformation(entity)}>
							<div className="items-center flex-grow overflow-hidden flex-2 centered-flex">
								<picture>
									<source media="(max-width: 480px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY400_.${setImageInformation(entity, 'extension')}`}></source>
									<source media="(max-width: 768px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`}></source>
									<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" src={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`} alt={entity.name} />
								</picture>
							</div>
							<div className="flex-1">
								<h3 className={`text-lg font-medium ${inverseClass ? 'text-primary-500' : 'text-secondary-500'} title-font truncate-2-lines`} title={entity.name}><TransformText uppercaseFirstLetter text={entity.name}/></h3>
								{
									showAsProducts ?
									<div className="mt-2"><ProductActionPrice buttonText="Más info" hideAmazonRatings hideAmazonRate product={entity} tag={tag} /></div>
									: <p className="text-base leading-relaxed text-textColor-500 truncate-3-lines"><TransformText uppercaseFirstLetter text={entity.description}/></p>
								}
							</div>
						</Link>
				}
			</div>)
	}

	const templateLowerTen = (entity, index) => {
		return (
			<div key={`${index}-item-${showAsProducts ? entity.asin : entity.id}`} className="w-full p-4 lg:w-1/2">
				{
					showAsProducts ? 
						<a className={`flex-col p-2 border border-gray-300 rounded-lg lg:flex-row ${inverseClass ? 'hover:border-secondary-300 focus:border-secondary-500' : 'hover:border-primary-300 focus:border-primary-500'} outline-none centered-flex h-96 lg:h-60 bg-white`} href={setUrlInformation(entity)} target="_blank" rel="nofollow noopener noreferrer">
							<div className="items-center flex-grow pr-2 overflow-hidden flex-2 centered-flex lg:flex-1">
								<picture>
									<source media="(max-width: 480px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY400_.${setImageInformation(entity, 'extension')}`}></source>
									<source media="(max-width: 768px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`}></source>
									<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" src={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`} alt={entity.name} />
								</picture>
							</div>
							<div className="flex-1">
								<h3 className={`text-lg font-medium ${inverseClass ? 'text-primary-500' : 'text-secondary-500'} title-font truncate-2-lines`} title={entity.name}><TransformText uppercaseFirstLetter text={entity.name}/></h3>
								{
									showAsProducts ?
									<div className="mt-2"><ProductActionPrice buttonText="Más info" hideAmazonRatings hideAmazonRate product={entity} tag={tag} /></div>
									: <p className="text-base leading-relaxed text-textColor-500 truncate-3-lines"><TransformText uppercaseFirstLetter text={entity.description}/></p>
								}
							</div>
						</a>
					:
						<Link className={`flex-col p-2 border border-gray-300 rounded-lg lg:flex-row ${inverseClass ? 'hover:border-secondary-300 focus:border-secondary-500' : 'hover:border-primary-300 focus:border-primary-500'} outline-none centered-flex h-96 lg:h-60 bg-white`} to={setUrlInformation(entity)}>
							<div className="items-center flex-grow pr-2 overflow-hidden flex-2 centered-flex lg:flex-1">
								<picture>
									<source media="(max-width: 480px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY400_.${setImageInformation(entity, 'extension')}`}></source>
									<source media="(max-width: 768px)" srcSet={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`}></source>
									<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" src={`${setImageInformation(entity, 'src')}._AC_SY300_.${setImageInformation(entity, 'extension')}`} alt={entity.name} />
								</picture>
							</div>
							<div className="flex-1">
								<h3 className={`text-lg font-medium ${inverseClass ? 'text-primary-500' : 'text-secondary-500'} title-font truncate-2-lines`} title={entity.name}><TransformText uppercaseFirstLetter text={entity.name}/></h3>
								{
									showAsProducts ?
									<div className="mt-2"><ProductActionPrice buttonText="Más info" hideAmazonRatings hideAmazonRate product={entity} tag={tag} /></div>
									: <p className="text-base leading-relaxed text-textColor-500 truncate-3-lines"><TransformText uppercaseFirstLetter text={entity.description}/></p>
								}
							</div>
						</Link>
				}
			</div>
		)
	}

	return (
		<div className="flex flex-wrap">
			<div className="flex flex-wrap">
				{
					entities.length ?
						(
							entities.slice(0, numberOfEntities || entities.length).map((entity, index) => {
								return entities.length > 10 ? templateHigherTen(entity, index) : templateLowerTen(entity, index);
							})
						)
					: (
						<div>
							No hay registros que coincidan con lo que se requiere
						</div>
					)
				}
			</div>
		</div>
	)
}

EntitiesList.propTypes = {
	entities: PropTypes.array,
	relativePath: PropTypes.bool,
	inverseClass: PropTypes.bool,
	numberOfEntities: PropTypes.number,
	dummyImage: PropTypes.object,
	tag: PropTypes.string
}

EntitiesList.defaultProps = {
	entities: [],
	relativePath: false,
	inverseClass: false,
	numberOfEntities: null,
	dummyImage: null
}

export default EntitiesList;