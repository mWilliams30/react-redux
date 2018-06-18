import React, {PropTypes} from 'react';

const QuoteRequirementsList = ({quote}) => {
    return(
        <ul className="quote-requirements">            
            <li><strong>£{quote.UnderwriterCompulsoryExcess ? quote.UnderwriterCompulsoryExcess : "No"}</strong> compulsory excess</li> 
            <li>Up to {quote.UnderwriterMaxPenaltyPoints} licence point(s) in last {quote.UnderwriterMaxPenaltyPointsExpiryYears} year(s)</li>
            <li>Up to {quote.UnderwriterMaxFaultClaims} fault claim(s) in last {quote.UnderwriterMaxFaultClaimsExpiryYears} year(s)</li>
            <li>Minimum vehicle value: <strong>£{quote.UnderwriterMinimumVehicleValue}</strong></li>
        </ul> 
    );
};

QuoteRequirementsList.propTypes = {
    quote: PropTypes.object.isRequired
};

export default QuoteRequirementsList;
