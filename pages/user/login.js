import {React,useState} from 'react'
import {auth} from '../../components/firebaseConfig'
import {useRouter} from 'next/router'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Form,Button} from 'react-bootstrap'
import HeaderLogo from '../../components/headerlogo'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const router = useRouter();
  const handleSubmit = () =>{
    console.log(email,password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    console.log("login successful");
    router.replace('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  const handleSignUp = () =>{
    router.push('/user/signup');
  }
  return (
    <div>
      <HeaderLogo />
      <h1 style={{textAlign:"center",fontWeigth:"bold",color:"black"}}>Login</h1>
<Form className="form m-5 border border-danger rounded mb-3 bg-danger">
  <Form.Group className="mb-3 p-3 px-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="border border-danger" type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 p-3 px-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className="border border-danger" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3 p-3 px-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="danger" className="m-3" onClick={handleSubmit}>
    LogIn
  </Button>
  <Button variant="danger" className="m-3" onClick={handleSignUp}>
    SignUp
  </Button>
</Form>
    </div>
  )
}

export default Login