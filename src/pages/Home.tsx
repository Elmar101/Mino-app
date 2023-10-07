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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === 'name') setName(event.target.value);
    else if(event.target.name === 'surname') setSurname(event.target.value);
  };
    
    


  return (
    <>
      <form onSubmit={onHandleSubmit}>
        Name: <input name="name" value={name} onChange={handleChange}/> <br/>
        Surname: <input name="surname" value={suname} onChange={handleChange}/> <br/>
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