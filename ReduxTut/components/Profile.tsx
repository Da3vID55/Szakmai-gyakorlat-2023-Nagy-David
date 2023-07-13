
import {useSelector} from 'react-redux'
import { RootState } from '../main';

function Profile() {
    const user = useSelector((state: RootState) => state.user.value)
    const themeColor = useSelector((state: RootState) => state.theme.value)

  return (
  <div style={{color: themeColor}}>
    <h1>Profile Page</h1>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Email: {user.email}</p>
  </div>
  )
}

export default Profile