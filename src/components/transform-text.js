import PropTypes from "prop-types";
import React from "react";

const TransformText = ({uppercaseFirstLetter, text}) => {

	const setUppercaseFirstLetter = () => text.charAt(0).toUpperCase() + text.slice(1);

	return (
		<>
			{uppercaseFirstLetter && setUppercaseFirstLetter()}
		</>
	)
}

TransformText.propTypes = {
	uppercaseFirstLetter: PropTypes.bool.isRequired,
	text: PropTypes.string,
}

TransformText.defaultProps = {
	uppercaseFirstLetter: false,
	text: null,
}

export default TransformText;