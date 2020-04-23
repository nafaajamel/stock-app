
import App from './../components/app'


function Error({ statusCode }) {
  return (
    <App>
    <p>
      {statusCode
        ? statusCode == '404' ?  '404 Page not found' : `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
    </App>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error