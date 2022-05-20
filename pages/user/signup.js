import {React ,useState} from 'react'
import {useRouter} from 'next/router';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../components/firebaseConfig'
const Signup = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const router = useRouter();
  const handleSubmit = () =>{
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    router.push('/user/login')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  return (
    <div>
      <div>
        <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} name="email" placeholder="Enter your Email✉" />
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}name="password" placeholder="Enter your Password" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
export default Signup