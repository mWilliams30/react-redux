import React, {PropTypes} from 'react';

const QuoteSelectButton = ({premium}) => {
    return(
        <div>
            <div className="quote-price-wrap hidden-xs">
                <span className="quote-price">£{premium}</span>
            </div>
            <div className="quote-submit-wrap">
                <a className="btn btn-lg btn-block btn-primary underwriter-selection-button">
                Select <span className="glyphicon glyphicon-chevron-right"></span>                            
                </a>
            </div>
        </div>        
    );
};

QuoteSelectButton.propTypes = {
    premium: PropTypes.string.isRequired
};

export default QuoteSelectButton;
