import React, {PropTypes} from 'react';

const QuoteList = ({quotes}) => {
    return(
        <div>
            {quotes.map(quote =>
                <article key={quote.Underwriter.Id} className="quote-result">
                    <header className="quote-header">
                        <div>
                            {quote.Underwriter.Name}
                        </div>
                    </header>
                    <section className="quote-body"> 
                        <div className="quote-choice-wrap quote-excess-wrap">
                        VOLUNTARY EXCESS
                        </div>   
                    </section>            
                </article>          
            )}   
        </div>    
        
    );
};

QuoteList.propTypes = {
    quotes: PropTypes.array.isRequired
};

export default QuoteList;