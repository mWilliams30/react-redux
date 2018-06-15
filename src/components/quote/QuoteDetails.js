import React, {PropTypes} from 'react';

const QuoteDetails = ({underwriter, quote}) => {
    return(
        <div>                      
            <article className="quote-result">
                <header className="quote-header">
                    <div>
                       {underwriter.Name}
                    </div>
                </header>
                <section className="quote-body"> 
                    <div className="quote-choice-wrap quote-excess-wrap">
                    {quote.Premium}
                    </div>   
                </section>            
            </article>               
        </div>
    );
};

QuoteDetails.propTypes = {
    quote: PropTypes.object.isRequired,
    underwriter: PropTypes.object.isRequired
};

export default QuoteDetails;