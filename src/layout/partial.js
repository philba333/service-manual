import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ( page ) => (
		<div className="container-fluid au-body au-grid">
			<div className="row">
				<div className="col-xs-12">
					{ page._body }
				</div>
			</div>
		</div>
);


Partial.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Partial.defaultProps = {};


export default Partial;
