import React, {PropTypes} from 'react';
import QuoteList from './QuoteList';

const QuotesPage = ({quotes}) => {
    return(
        <div>
            <h1>Quotes</h1>
            <QuoteList quotes={quotes} />
        </div>        
    );
};

QuotesPage.propTypes = {
    quotes: PropTypes.array.isRequired
};

export default QuotesPage;