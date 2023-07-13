
import {useDispatch} from "react-redux"
import { login, logout } from '../features/user'

function Login() {
    const dispatch = useDispatch()
  return (
    <>
        <button onClick={() => dispatch(login({name: "Sugon", age: 69, email: "bofa@deez.nuts"}))}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  )
}

export default Login