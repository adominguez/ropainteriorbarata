import PropTypes from "prop-types";
import React from "react";
import Parser from 'html-react-parser';

const TextBlock = ({headingSize, heading, text, image = {}, preHeading}) => {	

	const checkText = (text) => {
		return text.includes('<p>')
	}

	const renderText = () => (
		text && text.length &&
		!checkText(text) ? 
		<p className={`w-full leading-relaxed text-textColor-500 px-2 ${text.length < 300 ? 'lg:w-1/2' : ''} md:px-5`}>{Parser(text)}</p>
		: 
		<div className={`w-full leading-relaxed text-textColor-500 px-2 ${text.length < 300 ? 'lg:w-1/2' : ''} md:px-5`}>
			{Parser(text)}
		</div>
	)

	const renderHeading = () => (
		<>
			{
				preHeading &&
				<span className={`text-xs text-secondary-300 tracking-widest font-medium title-font mb-1`}>{preHeading}</span>
			}
			{
				headingSize === 1 && heading && heading.length &&
				<h1 className={`sm:text-3xl text-secondary-300 text-2xl px-2 md:px-5 font-medium title-font mb-4`}>
					{Parser(heading)}
				</h1>
			}
			{
				headingSize === 2 && heading && heading.length &&
				<h2 className={`sm:text-3xl text-secondary-300 text-2xl px-2 md:px-5 font-medium title-font mb-4`}>
					{Parser(heading)}
				</h2>
			}
			{
				headingSize === 3 && heading && heading.length &&
				<h2 className={`sm:text-3xl text-2xl px-2 md:px-5 font-medium title-font mb-4 text-secondary-color`}>
					{Parser(heading)}
				</h2>
			}
		</>
	)

	const headingColWithText = () => (
		<div  className="flex flex-col w-full text-center">
			{renderHeading()}
			{renderText()}
		</div>
	)

	const headingRowWithText = () => (
		<div className="flex flex-wrap w-full">
			<div className="w-full mb-6 lg:w-1/2 lg:mb-0">
				{renderHeading()}
				<div className={`h-1 w-20 bg-secondary-200 mx-2 md:mx-5 rounded`}></div>
			</div>
			{renderText()}
		</div>
	)

	return (
		text.length < 300 ? headingRowWithText() : text.length >= 300 && text.length > 700 && image ? (
			<div className="container flex flex-col items-center md:flex-row">
				<div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:pr-8 md:items-start md:text-left md:mb-0">
					{headingColWithText()}
				</div>
				{
					image &&
					<div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
						<picture>
							<source media="(max-width: 480px)" srcSet={`${image.src}._AC_SY300_.${image.extension}`}></source>
							<source media="(max-width: 768px)" srcSet={`${image.src}._AC_SY400_.${image.extension}`}></source>
							<img loading="lazy" className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg" alt={heading} src={`${image.src}._AC_SY500_.${image.extension}`} />
						</picture>
					</div>
				}
			</div>
		) : headingColWithText()
	)
}

TextBlock.propTypes = {
	headingSize: PropTypes.number,
	text: PropTypes.string,
	heading: PropTypes.string,
	image: PropTypes.object,
	preHeading: PropTypes.string,
}

TextBlock.defaultProps = {
	headingSize: 2,
	text: null,
	heading: null,
	image: null,
	preHeading: null
}

export default TextBlock;