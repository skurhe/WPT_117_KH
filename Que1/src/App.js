import axios from "axios";

import { useEffect,useState } from "react";


export default function App()
{

return(
  <div><MyComponent></MyComponent>

  </div>
  
);


  
}

function MyComponent(){
  
const[message,setMessage]=useState("");
const[list,setList]=useState([]);

const msghandle=(e)=>{
  setMessage(e.target.value);
}

const addmsg=()=>
{
  const newList=[...list,message]
  setList(newList);
  setMessage("");
};

return(
    <div className="container-fluid">
      <div className="row">
      <div className=" d-flex flex-row bg-success">
        <div className="fs-3">MyChatApp</div>
        <div className="m-3 fs-4">by(Siddheshwar kurhe)(210940320117)</div>
        </div>
        <div>
          <div className="row">
            <div className="col-8" ><input type="text" className="m-2 col-12" placeholder="Lets chat here...." value={message} onChange={msghandle}/></div>
            <div className="col-4 d-flex justify-content-center"> <input type="button" className="col-4 m-2" value="SEND" onClick={addmsg} /></div>
        
          </div>
        </div>
      </div >
      <div className="bg-info">
        <div d-flex>hii</div>
          <div d-flex>Hello</div>
          <div>How are you</div>
          <div>I am fine</div>
      </div>
          
    </div>
  );

 
}

function MyComponent2(){
  const [msg ,setMsg]=useState("");
  const [list,setList]=useState([]);

  const handlemsg=(e)=>{
    setMsg(e.target.value);
  }

  const getmsg=async() =>{
    const url="httP://localhost:4000/1";
    const result=await fetch(url);
    const list=await result.json();

    const newList=[...list];
     setList(newList);
  };
  const addmsg=async() =>{
    const url="httP://localhost:4000/add-msg";
    const data={
      msg:msg
    };
    
    await axios.post(url,data);
    const newList=[data,...list];
     setList(newList);
     setMsg("");
  };
return(
  <div className="m-3">
  <input type="text" placeholder="enter msg" value={msg} onChange={handlemsg}/>

  <div> <input type="button" value="get Msg" onClick={getmsg} /> </div>
  <input type="button" value="send" onClick={addmsg}/>

  <h1>msgs</h1>

  {
    list.map((item,index) => (
      <div key={index}>
        {item.msg}
        </div>
    ))
  }

  </div>
)

}