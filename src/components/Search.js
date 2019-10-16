import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchData} from '../actions/fetch-data';



class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchData(this.state.term);
        this.setState({ term:''})
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} >
                <input
                placeholder="YYYY-MM-DD"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span>
                    <button type="submit">Submit</button>
                </span>
                
            </form>
            
        )
    }
}

function mapDispatchToProps(dispath){
    return bindActionCreators({fetchData}, dispath);
}

export default connect(null,mapDispatchToProps)(Search)

