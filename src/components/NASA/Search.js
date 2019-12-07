import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchData} from '../../actions';



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
            
            <div className="search">
                <div className="form-group mb-2">
                    <form onSubmit={this.onFormSubmit} className="form-inline" >
                        <div className="form-group mb-2">
                            <label  className="sr-only">Email</label>
                            <input type="text"  
                            className="form-control-plaintext text-white" 
                            id="staticEmail2" value="Введите дату:" />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input
                            className="form-control"
                            placeholder="YYYY-MM-DD"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                        </div>
                        <span>
                            <button type="submit" className="btn btn-primary mb-2">Подтвердить</button>
                        </span>
                    </form>
                </div>
            </div>
            
            
        )
    }
}

function mapDispatchToProps(dispath){
    return bindActionCreators({fetchData}, dispath);
}

export default connect(null,mapDispatchToProps)(Search)

