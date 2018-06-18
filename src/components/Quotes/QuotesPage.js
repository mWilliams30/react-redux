import React, {PropTypes} from 'react';
import QuoteList from './QuoteList';

const QuotesPage = ({quotes, onQuoteSelect, onChange}) => {
    return(
        <div>
            <h1>Quotes</h1>
            <QuoteList 
                quotes={quotes} 
                onQuoteSelect={onQuoteSelect}
                onChange={onChange}/>
        </div>        
    );
};

QuotesPage.propTypes = {
    quotes: PropTypes.array.isRequired,
    onQuoteSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default QuotesPage;