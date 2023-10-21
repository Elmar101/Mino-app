import { useAuthContext } from "../store";

const About = () => {
  const [state ] = useAuthContext();

  return (
    <div>
      <h6>name: {state.name}</h6>
      <h6>sname: { state.sname }</h6>
    </div>
  )
}

export default About