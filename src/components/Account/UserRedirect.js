import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import useDocs from '../../hooks/useDocs'

export default function UserRedirect() {

  var [redirectTimeout] = useState(0);
  const history = useHistory();
  const { docs } = useDocs('profiles');
  const username = docs.username;

  useEffect(() => {
    redirectTimeout = setTimeout(() => {
      history.push("/user/" + username)
    }, 1000);
    return function cleanup() {
      clearTimeout(redirectTimeout);
    };
  });

  return (
      <>
        <strong>Redirecting you to your profile page...</strong>
      </>
  );
}
