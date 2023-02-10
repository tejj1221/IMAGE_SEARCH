// //import logo from './logo.svg';
// import React, { useState } from 'react';
// import './App.css';
// //ABxBXw9msF9aSsPcZ2AT9WfFt8_0UJ8EJdkLLiiMM6U---authorisation
// //hN0-MPWXGnNSGczURVWWNMUm4GK3nc2VDpfIgIpvwnY---accesskey

// // qqfryVH70qgS9VJm3CV7gco5GqaKclXK5bObhY2Grmh1SilngYI5RTga
// //"urls":{"raw":"https://images.unsplash.com/photo-1661956600654-edac218fea67?ixid=Mnw0MDg5NTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NjAzMjAyOQ\u0026ixlib=rb-4.0.3",
// //"full":"https://images.unsplash.com/photo-1661956600654-edac218fea67?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MDg5NTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NjAzMjAyOQ\u0026ixlib=rb-4.0.3\u0026q=80",
// //"regular":"https://images.unsplash.com/photo-1661956600654-edac218fea67?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MDg5NTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NjAzMjAyOQ\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
// //"small":"https://images.unsplash.com/photo-1661956600654-edac218fea67?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MDg5NTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NjAzMjAyOQ\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400","thumb":"https://images.unsplash.com/photo-1661956600654-edac218fea67?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MDg5NTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NjAzMjAyOQ\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200","small_s3":"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661956600654-edac218fea67"}
// //import axios from axios;
// const api="https://api.unsplash.com/photos/?client_id=hN0-MPWXGnNSGczURVWWNMUm4GK3nc2VDpfIgIpvwnY"
// function App() {
//    const [search,setsearch]=useState(" ")
//    const[data,setdata]=useState([])
//     fetch(api).then(
//       (res)=>{
//           // setdata(res.data)
//            console.log(res)
//       }
//     )
//    //console.log(data)

//   return (
//     <div className="App">
//       <div> <h1>imagesearchapp</h1><button>bookmarks</button></div>
//       <div><input type="search" onChange={(e)=>{setsearch(e.target.value)}}  /><button>search</button></div>
      
//     </div>
//   );
// }

// export default App;


//import logo from './logo.svg';
import './App.css';
import Imagesearch from './components/imagesearch';
function App() {
  return (
    <div className="App">
      <Imagesearch/>
    </div>
  );
}

export default App;
