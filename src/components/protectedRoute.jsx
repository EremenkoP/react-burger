import { Redirect, Route, useLocation } from "react-router-dom"

const ProtectedRoute = ({children, logistic, path, toRedirect, ...rest}) => {

  const location = useLocation()
  console.log(location)

  return (
    <Route
    path={path}
    {...rest}
      render={()=>
        logistic ?
          children
        :
        <Redirect  to={{ pathname: toRedirect, state: { from: location } }} />
      }
    />
  )
}

export {ProtectedRoute}
