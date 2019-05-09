import { Route, Redirect } from 'react-router-dom'
import React from 'react'

const renderMergedProps = (component, routeProps, ...rest) => {
  const finalProps = Object.assign({}, ...rest, routeProps);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRouteWithoutRouter = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

export const PropsRoute = PropsRouteWithoutRouter
