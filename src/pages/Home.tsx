import { useState } from "react";

interface IUser {
  name: string;
  surname: string;
};

const data: IUser[] = [
  {name: '' , surname: ''}
];

const Home = () => {
  const [state, setState] = useState<IUser[]>(data);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");


  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name && !surname) return;
    setState([...state, { name: name, surname: surname}]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === 'name') setName(event.target.value);
    else if(event.target.name === 'surname') setSurname(event.target.value);
  };
  
  console.log(!name && !surname);

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        Name: <input name="name" value={name} onChange={handleChange}/> <br/>
        Surname: <input name="surname" value={surname} onChange={handleChange}/> <br/>
        <button type="submit" disabled={!name || !surname}> Add user </button>
      </form>
      <br/><br/>
      <div>
        <h1> Show All Users</h1>
        {state && state.map(obj=> <div key={obj.name}>
          <h6>{obj.name} {obj.surname}</h6>
        </div>)}
      </div>
    </>
  );

}

export default Home