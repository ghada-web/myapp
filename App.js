
import './App.css';
import'./style.css';
import image from"./imageInSrc.png"




  function App () {
  return (
  <div className="myapp">
  <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

  <h1 className="title-red">Your name here</h1>
 
  <br/ >
 
  <img src={image} alt="imageInSrc"/>
 
  <br/ >
 
  <img src="/imageInPublic.jpg" alt=""/>
 
 </div>
 
 <video width="320" height="240" controls source src="myVideo.mp4" type="video/mp4"/>



 
 </div>
  
  )}
  export default App;


