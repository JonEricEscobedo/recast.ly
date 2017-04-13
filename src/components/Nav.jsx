var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search text={props.text} updateText={props.updateText} clicker={props.clicker}/>
    </div>
  </nav>
);

Nav.propTypes = {
  updateText: React.PropTypes.func.isRequired,
  clicker: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
