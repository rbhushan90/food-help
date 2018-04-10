import React from 'react';
import { Link } from 'react-router-dom';

class SplashSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search_string: "",
      near_string: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }
  
  submitForm(e) {
    e.preventDefault();
    let searchUrl = `/search?search_string=${encodeURI(this.state.search_string)}`;
    this.props.history.push(searchUrl);
  }

  update (type) {
    return e => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      });
    };
  }

  render () {
    return (
      <div className="splash-search-component">
        <h1>
          <Link to="/"><img className="splash-search-logo" src="/assets/logo.png"></img></Link>
        </h1>
        <form className="splash-search-form">
          <div className="splash-search-pseudo-form-input-field">
            <label htmlFor="search-string-input">Find</label>
            <input type="string" id="search-string-input" onChange={this.update('search_string')} placeholder="cafe, ramen, fast food" value={this.state.search_string} />
          </div>
          <div className="splash-search-pseudo-form-input-field">
            <label htmlFor="near-string-input">Near</label>
            <input type="string" id="near-string-input" onChange={this.update('near_string')} placeholder="San Francisco, CA" value={this.state.near_string} />
          </div>
          <button className="splash-search-form-submit-button" onClick={this.submitForm} ><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <ul>
          <li><Link to="/search?search_string=cafe">Cafes</Link></li>
          <li><Link to="/search?search_string=ramen">Ramen</Link></li>
          <li><Link to="/search?search_string=fast+food">Fast Food</Link></li>
        </ul>
      </div>
    );
  }
}

export default SplashSearch;
