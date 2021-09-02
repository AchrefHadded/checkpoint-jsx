import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './imageinsrc.jpg' ;
import video from './myvideo.mp4' ;


const App =()=>{
return(

<div style={{ border: "1px solid black", maxWidth: "100vw"}}>

<h1 className="title red">Your name here</h1>



<img src={image}></img>

<br/>

<img src="/imageInPublic.jpg"></img>



          <video style={{width="320" ,height="240" ,controls}}>

           <source src={video} type="video/mp4" />    

          </video>
</div>


);
}
export default App;
