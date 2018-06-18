import React, {PropTypes} from 'react';

const QuoteSelectButton = ({premium, onClick}) => {
    return(
        <div>
            <div className="quote-price-wrap hidden-xs">
                <span className="quote-price">£{premium}</span>
            </div>
            <div className="quote-submit-wrap">
                <a className="btn btn-lg btn-block btn-primary underwriter-selection-button" 
                onClick={onClick}>
                Select <span className="glyphicon glyphicon-chevron-right"></span>                            
                </a>
            </div>
        </div>        
    );
};

QuoteSelectButton.propTypes = {
    premium: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default QuoteSelectButton;
