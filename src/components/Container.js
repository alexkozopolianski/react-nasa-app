import React, { useEffect } from "react";
import AstronomyCard from "./Cards";
import { connect } from "react-redux";
import { fetchData } from "../store/actions/fetchData";

const AstronomyContainer = (props) => {
  useEffect(() => {
    props.fetchData();
  });

  return <AstronomyCard data={props.astronomy} />;
};

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);
