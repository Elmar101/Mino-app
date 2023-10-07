import { useState } from "react";

interface IUser {
  name: string;
  surname: string;
};

const Home = () => {
  const [state, setState] = useState<IUser[]>([]);
  const [name, setName] = useState<string>("");
  const [suname, setSurname] = useState<string>("");


  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, suname);
    
  };


  return (
    <>
      <form onSubmit={onHandleSubmit}>
        Name: <input value={name} onChange={()=> setName("Elmar")}/> <br/>
        Surname: <input value={suname} onChange={()=> setSurname("Amanov") }/> <br/>
        <button type="submit"> Add user </button>
      </form>
      <br/><br/>
      <div>
        <h1> Show All Users</h1>
        {state && state.map(obj=> <div>
          <h6>{obj.name}</h6>
          <h6>{obj.surname}</h6>
        </div>)}
      </div>
    </>
  );

}

export default Home