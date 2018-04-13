import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Feedback component to be used after all content blocks
 */
const Feedback = ( page ) => {

	return (
		<div className="au-body au-grid feedback_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<div className="feedback_item">
							{ page.title }
						</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="feedback_item">
							<a href={ page.buttonUrl }>
								{ page.buttonText }
							</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</div>
						<div className="feedback_item">
							Email: <a href={ page.email_link }>guides-feedback@digital.gov.au ></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


Feedback.propTypes = {

	/**
	 * buttonUrl: /feedback
	 */
	buttonUrl: PropTypes.string.isRequired,

	/**
	 * buttonText: Send us feedback
	 */
	buttonText: PropTypes.string.isRequired,
};


Feedback.defaultProps = {};


export default Feedback;
