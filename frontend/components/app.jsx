import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';

import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import GreetingContainer from './greeting/greeting_container';
import SessionPageContainer from './session/session_page_container';
import BusinessPageContainer from './business/show/business_page_container';
import AddBusinessPageContainer from './business/create/add_business_page_container';
import HomePage from './homepage/homepage_container';
import Empty from './homepage/empty';
import SearchResultsPageContainer from './search/search_results_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



class App extends React.Component {

  componentDidMount() {
    this.unlistenRouteChanges = this.props.history.listen((location, action) =>  {
      this.props.routeChanged();
    });
  }

  componentWillUnmount() {
    this.unlistenRouteChanges();
  }

  render() {
    return (
      <section className="app">
        <Switch>
          <Route exact path="/" component= { Empty } />
          <Route path="/" component= { HeaderContainer } />
        </Switch>
        
        <Switch>
          <Route exact path="/login" component= { Empty } />
          <Route exact path="/signup" component= { Empty } />
          <Route path="/" component= {GreetingContainer} />
        </Switch>

        <Switch>
          <Route exact path="/" component= {HomePage} />
          <ProtectedRoute exact path="/biz/newBiz" component= { AddBusinessPageContainer} />
          <Route exact path="/biz/:businessId" component= { BusinessPageContainer } />
          <AuthRoute exact path="/login" component= { SessionPageContainer } />
          <AuthRoute exact path="/signup" component= { SessionPageContainer } />
          <Route path="/search" component= { SearchResultsPageContainer } />
        </Switch>

        <FooterContainer />
      </section>
    );
  }
}

export default App;
