import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuoteList from '../quote/QuoteList';

class QuotesPage extends React.Component{
    constructor(props, context){
        super(props, context);              
    }

    render(){
        const {quotes} = this.props;

        return(
            <div>
            <h1>Quotes</h1>
            <QuoteList quotes={quotes} />
            </div>
        );
    }    
}

QuotesPage.propTypes = {
    quotes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state, ownProps){
    return{
      quotes: state.quotes
    };
  }

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(quoteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);