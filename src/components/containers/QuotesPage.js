import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuoteDetails from '../quote/QuoteDetails';

class QuotesPage extends React.Component{
    constructor(props, context){
        super(props, context);              
    }  

    render(){
        const {underwriters} = this.props;

        return(
            <div>
            <h1>Quotes</h1>
            {underwriters.map(underwriter => 
               <QuoteDetails 
                    key={underwriter.Id} 
                    underwriter={underwriter}
                    quote={this.props.actions.getQuote(underwriter.Id)} /> 
            )}                   
            </div>
        );
    }    
}

QuotesPage.propTypes = {
    underwriters: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state, ownProps){
    return{
      underwriters: state.underwriters
    };
  }

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(quoteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);