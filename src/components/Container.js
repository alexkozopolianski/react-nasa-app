import React, { Component } from 'react';
import AstronomyCard from './Cards';
import { connect } from 'react-redux'
import {fetchData} from '../actions/fetch-data';

class AstronomyContainer extends Component {

	componentWillMount() {
		this.props.fetchData();
	}

	render() {

		return (
			<AstronomyCard data={this.props.astronomy} />
		);

	}
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
	return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);