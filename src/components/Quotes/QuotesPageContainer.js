import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuotesPage from './QuotesPage';

class QuotesPageContainer extends React.Component{   
    render(){
        const {quotes} = this.props;

        return(           
            <QuotesPage quotes={quotes} />                                        
        );
    }    
}

QuotesPageContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPageContainer);