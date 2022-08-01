import { Redirect, Route } from "react-router-dom"

const ProtectedRoute = ({children, logistic, path, toRedirect, ...rest}) => {

  return (
    <Route
    path={path}
    {...rest}
      render={()=>
        logistic ?
          children
        :
        <Redirect to={toRedirect} />
      }
    />
  )
}

export {ProtectedRoute}
