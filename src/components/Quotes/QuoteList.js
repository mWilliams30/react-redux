import React, {PropTypes} from 'react';
import VoluntaryExcess from './VoluntaryExcess';
import QuoteRequirements from './QuoteRequirementsList';
import QuoteSelectButton from './QuoteSelectButton';

const QuoteList = ({quotes}) => {
    return(
        <div className="quote-results">    
            <div id="QuotingUnderwriterList">
                {quotes.map((quote, key) =>           
                    <div name="quoting-underwriter-overlay" key={key}>
                        <article className="quote-result" name="quoting-result-article">
                        <header className="quote-header">
                            <div className="quote-brand-wrap">
                                {quote.UnderwriterName}
                            </div>                       
                        </header>
                        <section className="quote-body">
                            <div className="quote-choice-wrap quote-excess-wrap" name="quoting-underwriter-section">
                                <label>
                                Voluntary Excess
                                {quote.UnderwriterSupportsVoluntaryExcess && <VoluntaryExcess />}                                                                           
                                </label>
                            </div> 
                            <div className="quote-requirements-wrap" name="quoting-underwriter-section">
                                <QuoteRequirements quote={quote} />                            
                            </div>
                        </section>
                        <footer className="quote-footer" name="quoting-underwriter-section">                       
                            <QuoteSelectButton premium={quote.Premium} />
                        </footer>
                    </article>
                </div>                             
            )}
            </div>
        </div>
    );
};

QuoteList.propTypes = {
    quotes: PropTypes.array.isRequired
};

export default QuoteList;