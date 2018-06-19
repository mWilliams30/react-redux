import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuotesPage from './QuotesPage';

class QuotesPageContainer extends React.Component{   
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            selectedQuote: Object.assign({}, props.selectedQuote)            
        };
        this.onQuoteSelect = this.onQuoteSelect.bind(this);
        this.updateSelectedQuoteState = this.updateSelectedQuoteState.bind(this);
    }

    onQuoteSelect(event, quote){
        event.preventDefault();      
        return this.setState({selectedQuote: quote});                       
    }

    updateSelectedQuoteState(event){
        const field = event.target.name;
        let selectedQuote = Object.assign({}, this.state.selectedQuote);
        selectedQuote[field] = event.target.value;
        return this.setState({selectedQuote: selectedQuote});
    }

    render(){
        const {quotes} = this.props;

        return(           
            <QuotesPage 
                quotes={quotes} 
                onQuoteSelect={this.onQuoteSelect} 
                onChange={this.updateSelectedQuoteState} />                                        
        );
    }    
}

function getQuoteByUnderwriterId(quotes, underwriterId){
    const filteredQuotes = quotes.filter(quote => quote.UnderwriterId == underwriterId);
    if(filteredQuotes.length)
    {
        return {
            id: filteredQuotes[0].QuoteId,
            underwriterId: underwriterId,
            underwriterName: filteredQuotes[0].UnderwriterName,
            premium: filteredQuotes[0].Premium,
            voluntaryExcess: filteredQuotes[0].VoluntaryExcess
        };
    } 
    return null;
}


function mapStateToProps(state, ownProps){
    let selectedQuote = {id: '', underwriterId: '', underwriterName: '', premium: 0, voluntaryExcess: 0};
    
    return{
        quotes: state.quotes,
        selectedQuote : selectedQuote
    };
  }

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(quoteActions, dispatch)
    };
}

QuotesPageContainer.propTypes = {
    quotes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    selectedQuote: PropTypes.object.isRequired
  };

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPageContainer);