import { FC } from "react"
import { Redirect, Route, useLocation } from "react-router-dom"

type TProtectedRoute = {
  logistic: boolean;
  path: string;
  toRedirect: string;
  exact?: boolean
}

const ProtectedRoute: FC<TProtectedRoute> = ({children, logistic, path, toRedirect, ...rest}) => {

  const location = useLocation()

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
