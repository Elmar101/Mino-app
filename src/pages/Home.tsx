import { useState } from "react";

const Home = () => {
  const [state, setState] = useState<{title: string}>({title: "Home"});

  return (
    <div>{state.title}</div>
  );

}

export default Home