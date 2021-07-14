import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../store/actions/fetchData";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.fetchData(term);
    setTerm("");
  };

  return (
    <div className="search">
      <div className="form-group mb-2">
        <form onSubmit={onFormSubmit} className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input
              className="form-control"
              placeholder="YYYY-MM-DD"
              value={term}
              onChange={onInputChange}
            />
          </div>
          <span>
            <button type="submit" className="btn btn-primary mb-2">
              Подтвердить
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispath) {
  return bindActionCreators({ fetchData }, dispath);
}

export default connect(null, mapDispatchToProps)(Search);
