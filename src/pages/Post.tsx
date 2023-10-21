import { useState } from "react"
import { useAuthContext } from "../store";

const Post = () => {
  const [user, setUser] = useState(  {name: '', sname: ''}   );
  const [,setState] = useAuthContext(); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
  };

  const addUser = () => {
    setState(user);
  };
  
  return (
    <div>
      <form>
        Name: <input name="name"  value={user.name} onChange={handleChange}/> <br/>
        Surname: <input name="sname" value={user.sname} onChange={handleChange}/> <br/>
        <button type="button" onClick={addUser}> Add user </button>
      </form>
    </div>
  )
}

export default Post