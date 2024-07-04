import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../store/actions/UserActions";

const Home = () => {

  const dispatch = useDispatch()

  const { userData } = useSelector((state)=>state.UserDetailsReducer)
  const [data,setData] = useState(1)
  console.log("..............userData",userData);
  useEffect(()=>{
    dispatch(getUserDetails())
  },[])

  const handleClick=()=>{
    setData(data+1)
  }

    return (
      <section>
        <h1>This is the home page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut	labore et	dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
          {userData?.map((obj,i)=>(
            <div>{obj?.title}</div>
          ))}
          {data}
          <button onClick={()=>handleClick()}>Hello</button>
      </section>
    );
  };
  export default Home;