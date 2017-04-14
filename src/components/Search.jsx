var Search = (props) => (
  <div className="search-bar form-inline">
    <label>
      <input type="text"  value={props.text} onChange={props.updateText} className="form-control" id="search-term"/>
    </label>
    <button onClick={props.clicker.bind(this)} className="btn hidden-sm-down" id="search-button">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

Search.propTypes = {
  updateText: React.PropTypes.func.isRequired,
  clicker: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
