import React, { Component } from "react";
import styled from "styled-components";
import "../styles.css";
import capa from "../Figures/Death_Note_capa.jpg"
import regraOne from "../Figures/1.jpg"
import regraTwo from "../Figures/2.png"
import regraThree from "../Figures/3.png"
import regraFour from "../Figures/4.png"
import regraFive from "../Figures/5.png"
import regraSix from "../Figures/6.png"
import regraSeven from "../Figures/7.png"
import regraEight from "../Figures/8.png"
import regraNine from "../Figures/9.png"
import regraTen from "../Figures/10.png"
import regraEleven from "../Figures/11.png"
import regraTwelve from "../Figures/12.png"
import regraThirteen from "../Figures/13.png"
import regraFourteen from "../Figures/14.png"
import regraFifteen from "../Figures/15.png"
import regraSixteen from "../Figures/16.png"
import regraSeventeen from "../Figures/17.png"
import regraEighteen from "../Figures/18.png"
import regraNineteen from "../Figures/19.png"
import regraTwenty from "../Figures/20.png"
import regraTwentyOne from "../Figures/21.png"
import regraTwentyTwo from "../Figures/22.png"
import regraTwentyThree from "../Figures/23.png"
import regraTwentyFour from "../Figures/24.png"
import regraTwentyFive from "../Figures/25.png"
import regraTwentySix from "../Figures/26.png"
import regraTwentySeven from "../Figures/27.png"
import regraTwentyEight from "../Figures/28.png"
import regraTwentyNine from "../Figures/29.png"
import regraThirty from "../Figures/30.png"
import regraThirtyOne from "../Figures/31.png"
import regraThirtyTwo from "../Figures/32.png"
import regraThirtyThree from "../Figures/33.png"
import regraThirtyFour from "../Figures/34.png"
import regraThirtyFive from "../Figures/35.png"
import regraThirtySix from "../Figures/36.png"
import regraThirtySeven from "../Figures/37.png"
import regraThirtyEight from "../Figures/38.png"
import regraThirtyNine from "../Figures/39.png"
import regraFourty from "../Figures/40.png"
import regraFourtyOne from "../Figures/41.png"
import regraFourtyTwo from "../Figures/42.png"
import regraFourtyThree from "../Figures/43.png"
import regraFourtyFour from "../Figures/44.png"
import regraFourtyFive from "../Figures/45.png"
import regraFourtySix from "../Figures/46.png"
import regraFourtySeven from "../Figures/47.png"
import regraFourtyEight from "../Figures/48.png"
import regraFourtyNine from "../Figures/49.png"
import regraFifty from "../Figures/50.png"
import regraFiftyOne from "../Figures/51.png"
import regraFiftyTwo from "../Figures/52.png"
import regraFiftyThree from "../Figures/53.png"
import regraFiftyFour from "../Figures/54.png"
import regraFiftyFive from "../Figures/55.png"
import regraFiftySix from "../Figures/56.png"

import regraFiftyEight from "../Figures/58.png"
import regraFiftyNine from "../Figures/59.png"
import regraSixty from "../Figures/60.png"
import regraSixtyOne from "../Figures/61.png"
import regraSixtyTwo from "../Figures/62.png"
import regraSixtyThree from "../Figures/63.png"
import regraSixtyFour from "../Figures/64.png"
import regraSixtyFive from "../Figures/65.png"
import regraSixtySix from "../Figures/66.png"
import regraSixtySeven from "../Figures/67.png"
import regraSixtyEight from "../Figures/68.png"


import r from "../Figures/b.jpg"
const Container = styled.main`
    display:flex;
    justify-content: space-between;
    align-items: center;
     background-color:black; 
     
`
  const Cover = styled.section`
        width: 30%;
        height: 100vh;

       background-image: url(${capa});
       background-repeat: no-repeat;
       background-size: cover;
       position:relative;

       img{
         position:absolute;
        width:18vw;
        height:38vh;
        top:48vh;
        right:14vw;
       }
       div img{
        position:absolute;
       width:20vw;
       height:30vh;
       top:30vh;
       left:15vw;
      }
      @media screen and (min-width: 360px) and (max-width: 480px){
          display:none;
      } 

     
  `;

 


  const Rules = styled.section`
        width: 30%;
        height: 100vh;

         img{
          width:25vw;
          height: 80vh;
         }
         h4{
            color:white;
         }
         div{
            
             width:29vw;
        
         }
         button{
         
           width:1.5vw;
           font-size:1vw;
           color:white;
           background-color:black;
           border:none;
           cursor:pointer;
          
        }
        
         @media screen and (min-width: 360px) and (max-width: 480px){
          display:none;
      } 
     
  `;
  const Page = styled.section`
          width:30vw;
          height:95vh;
    

     
       h2{
        color:white;

        
      }
      input{
         background-color:black;
         color:white;
         
         margin-left:4vw;
         border:none;
         width:17vw;
      
         
      }
      button{
        background-color:black;
         color:white;
         border:none;
         margin-left:2vw;
         cursor:pointer;
      }
      img{
         display:none;
      }
      @media  screen and (min-width: 360px) and (max-width: 480px){
          
          width:96%;
          height: 100vh;
          background-image:none;
         img{
            display:flex;
            width:80vw;
            height: 25vh;
            margin-left:8.5vw;
         }
         input{
            margin-top:0;
            width:43vw;
            margin-left:10vw;
            
         }
         button{
          margin-left:3vw;
         } 
      } 
     
  `;
    const List = styled.div`
         
        margin-top:4vh;
        position:relative;
    button{
      background-color:black;
       color:white;
       border:none;
        bottom:0.25vh;
       position:absolute;
      
       
    }
    
    
      ul{
         display:flex;
         justify-content:space-evenly;
         align-items: flex-start;
      
      
         list-style: none;
         width:15vw;
         margin-left:4vw;
       
        
    } 
    li{
      color:white;
      cursor:pointer;
      font-size:2vh;
      
    }
    @media  screen and (min-width: 360px) and (max-width: 480px){
      button{

        left:10vw;
        top:0.3vh;
      }
      ul{
         margin-left:15vw;
      }

    }

    
    `


export default class Main extends Component {
     
     state={
        tarefas: "",
        listaDeTarefas: [],
        regraOne     
 
     };
     handleChange = (event) =>{
         this.setState({
             tarefas:event.target.value
         });

     };
     changeImagemOne = () =>{
      this.setState({
          regraOne:regraOne
      });
    };
     changeImagemTwo = () =>{
      this.setState({
          regraOne:regraTwo
      });

  };
  changeImagemThree = () =>{
    this.setState({
        regraOne:regraThree
    });
    

};
changeImagemFour = () =>{
  this.setState({
      regraOne:regraFour
  });
  

};
changeImagemFive = () =>{
  this.setState({
      regraOne:regraFive
  });
  

};
changeImagemSix = () =>{
  this.setState({
      regraOne:regraSix
  });
  

};
changeImagemSeven = () =>{
  this.setState({
      regraOne:regraSeven
  });
  

};
changeImagemEight = () =>{
  this.setState({
      regraOne:regraEight
  });
  

};
changeImagemNine = () =>{
  this.setState({
      regraOne:regraNine
  });
  

};
changeImagemTen = () =>{
  this.setState({
      regraOne:regraTen
  });
  

};
changeImagemEleven = () =>{
  this.setState({
      regraOne:regraEleven
  });
  

};
changeImagemTwelve = () =>{
  this.setState({
      regraOne:regraTwelve
  });
  

};
changeImagemThirteen = () =>{
  this.setState({
      regraOne:regraThirteen
  });
  

};
changeImagemFourteen= () =>{
  this.setState({
      regraOne:regraFourteen
  });
  

};
changeImagemFifteen = () =>{
  this.setState({
      regraOne:regraFifteen
  });
  

};
changeImagemSixteen = () =>{
  this.setState({
      regraOne:regraSixteen
  });
  

};
changeImagemSeventeen = () =>{
  this.setState({
      regraOne:regraSeventeen
  });
  

};
changeImagemEighteen = () =>{
  this.setState({
      regraOne:regraEighteen
  });
  

};
changeImagemNineteen = () =>{
  this.setState({
      regraOne:regraNineteen
  });
  

};
changeImagemTwenty = () =>{
  this.setState({
      regraOne:regraTwenty
  });
  

};
changeImagemTwentyOne = () =>{
  this.setState({
      regraOne:regraTwentyOne
  });
  

};
changeImagemTwentyTwo = () =>{
  this.setState({
      regraOne:regraTwentyTwo
  });
  

};
changeImagemTwentyThree = () =>{
  this.setState({
      regraOne:regraTwentyThree
  });
  

};
changeImagemTwentyFour = () =>{
  this.setState({
      regraOne:regraTwentyFour
  });
  

};
changeImagemTwentyFive = () =>{
  this.setState({
      regraOne:regraTwentyFive
  });
  

};
changeImagemTwentySix = () =>{
  this.setState({
      regraOne:regraTwentySix
  });
  

};
changeImagemTwentySeven = () =>{
  this.setState({
      regraOne:regraTwentySeven
  });
  

};
changeImagemTwentyEight = () =>{
  this.setState({
      regraOne:regraTwentyEight
  });
  

};
changeImagemTwentyNine = () =>{
  this.setState({
      regraOne:regraTwentyNine
  });
  

};
changeImagemThirty = () =>{
  this.setState({
      regraOne:regraThirty
  });
  

};
changeImagemThirtyOne = () =>{
  this.setState({
      regraOne:regraThirtyOne
  });
  

};
changeImagemThirtyTwo = () =>{
  this.setState({
      regraOne:regraThirtyTwo
  });
  

};
changeImagemThirtyThree = () =>{
  this.setState({
      regraOne:regraThirtyThree
  });
  

};
changeImagemThirtyFour = () =>{
  this.setState({
      regraOne:regraThirtyFour
  });
  

};
changeImagemThirtyFive = () =>{
  this.setState({
      regraOne:regraThirtyFive
  });
  

};
changeImagemThirtySix = () =>{
  this.setState({
      regraOne:regraThirtySix
  });
  

};
changeImagemThirtySeven = () =>{
  this.setState({
      regraOne:regraThirtySeven
  });
  

};
changeImagemThirtyEight = () =>{
  this.setState({
      regraOne:regraThirtyEight
  });
  

};
changeImagemThirtyNine = () =>{
  this.setState({
      regraOne:regraThirtyNine
  });
  

};
changeImagemFourty = () =>{
  this.setState({
      regraOne:regraFourty
  });
  

};
changeImagemFourtyOne = () =>{
  this.setState({
      regraOne:regraFourtyOne
  });
  

};
changeImagemFourtyTwo = () =>{
  this.setState({
      regraOne:regraFourtyTwo
  });
  

};
changeImagemFourtyThree = () =>{
  this.setState({
      regraOne:regraFourtyThree
  });
  

};
changeImagemFourtyFour = () =>{
  this.setState({
      regraOne:regraFourtyFour
  });
  

};
changeImagemFourtyFive = () =>{
  this.setState({
      regraOne:regraFourtyFive
  });
  

};
changeImagemFourtySix = () =>{
  this.setState({
      regraOne:regraFourtySix
  });
  

};
changeImagemFourtySeven = () =>{
  this.setState({
      regraOne:regraFourtySeven
  });
  

};
changeImagemFourtyEight = () =>{
  this.setState({
      regraOne:regraFourtyEight
  });
  

};
changeImagemFourtyNine = () =>{
  this.setState({
      regraOne:regraFourtyNine
  });
  

};
changeImagemFifty = () =>{
  this.setState({
      regraOne:regraFifty
  });
  

};
changeImagemFiftyOne = () =>{
  this.setState({
      regraOne:regraFiftyOne
  });
  

};
changeImagemFiftyTwo = () =>{
  this.setState({
      regraOne:regraFiftyTwo
  });
  

};
changeImagemFiftyThree = () =>{
  this.setState({
      regraOne:regraFiftyThree
  });
  

};
changeImagemFiftyFour = () =>{
  this.setState({
      regraOne:regraFiftyFour
  });
  

};
changeImagemFiftyFive = () =>{
  this.setState({
      regraOne:regraFiftyFive
  });
  

};
changeImagemFiftySix = () =>{
  this.setState({
      regraOne:regraFiftySix
  });
  

};
changeImagemFiftyEight = () =>{
  this.setState({
      regraOne:regraFiftyEight
  });
  

};
changeImagemFiftyNine = () =>{
  this.setState({
      regraOne:regraFiftyNine
  });
  

};
changeImagemSixty = () =>{
  this.setState({
      regraOne:regraSixty
  });
  

};
changeImagemSixtyOne = () =>{
  this.setState({
      regraOne:regraSixtyOne
  });
  

};
changeImagemSixtyTwo= () =>{
  this.setState({
      regraOne:regraSixtyTwo
  });
  

};
changeImagemSixtyThree = () =>{
  this.setState({
      regraOne:regraSixtyThree
  });
  

};
changeImagemSixtyFour = () =>{
  this.setState({
      regraOne:regraSixtyFour
  });
  

};
changeImagemSixtyFive = () =>{
  this.setState({
      regraOne:regraSixtyFive
  });
  

};
changeImagemSixtySix = () =>{
  this.setState({
      regraOne:regraSixtySix
  });
  

};
changeImagemSixtySeven = () =>{
  this.setState({
      regraOne:regraSixtySeven
  });
  

};
changeImagemSixtyEight = () =>{
  this.setState({
      regraOne:regraSixtyEight
  });
  

};
     handleClick = () =>{
           this.setState({
                listaDeTarefas: this.state.listaDeTarefas.concat({
                      tarefas: this.state.tarefas,
                      id:Date.now()
                }),
                tarefas:''
           });

     };
      Remove=(id)=>{
        this.setState(
          {
            listaDeTarefas:this.state.listaDeTarefas.filter((item)=>(item.id !==id))
          }
         )
          
      }
       Enviar=(e)=>{
          if(e.key==='Enter'){
             this.handleClick()
          }
       }
  render() {
    return (
      <Container>
        <Cover>
          
           
        </Cover>
        <Page>
           <img src={r} alt=""></img>
        <input value={this.state.tarefas} onKeyPress={this.Enviar} onChange={this.handleChange} placeholder="Write a list of names here" />
        <button onClick={this.handleClick}>Save</button>           
           <div>
              {this.state.listaDeTarefas.map((item)=>(
                <List>
                  <ul>
                   <li>{item.tarefas}</li>
                   </ul>
                   <button onClick={()=>{this.Remove(item.id)}}>X</button>
                </List> 
               

              ))}
           </div>
        </Page>
        <Rules>
           <figure>
             <img src={this.state.regraOne} alt=""/>
           </figure>
            
            <div>
            <button onClick={this.changeImagemOne}>1</button>
            <button onClick={this.changeImagemTwo}>2</button>
            <button onClick={this.changeImagemThree}>3</button>
            <button onClick={this.changeImagemFour}>4</button>
            <button onClick={this.changeImagemFive}>5</button>
            <button onClick={this.changeImagemSix}>6</button>
            <button onClick={this.changeImagemSeven}>7</button>
            <button onClick={this.changeImagemEight}>8</button>
            <button onClick={this.changeImagemNine}>9</button>
            <button onClick={this.changeImagemTen}>10</button>
            <button onClick={this.changeImagemEleven}>11</button>
            <button onClick={this.changeImagemTwelve}>12</button>
            <button onClick={this.changeImagemThirteen}>13</button>
            <button onClick={this.changeImagemFourteen}>14</button>
            <button onClick={this.changeImagemFifteen}>15</button>
            <button onClick={this.changeImagemSixteen}>16</button>
            <button onClick={this.changeImagemSeventeen}>17</button>
            <button onClick={this.changeImagemEighteen}>18</button>
            <button onClick={this.changeImagemNineteen}>19</button>
            <button onClick={this.changeImagemTwenty}>20</button>
            <button onClick={this.changeImagemTwentyOne}>21</button>
            <button onClick={this.changeImagemTwentyTwo}>22</button>
            <button onClick={this.changeImagemTwentyThree}>23</button>
            <button onClick={this.changeImagemTwentyFour}>24</button>
            <button onClick={this.changeImagemTwentyFive}>25</button>
            <button onClick={this.changeImagemTwentySix}>26</button>
            <button onClick={this.changeImagemTwentySeven}>27</button>
            <button onClick={this.changeImagemTwentyEight}>28</button>
            <button onClick={this.changeImagemTwentyNine}>29</button>
            <button onClick={this.changeImagemThirty}>30</button>
            <button onClick={this.changeImagemThirtyOne}>31</button>
            <button onClick={this.changeImagemThirtyTwo}>32</button>
            <button onClick={this.changeImagemThirtyThree}>33</button>
            <button onClick={this.changeImagemThirtyFour}>34</button>
            <button onClick={this.changeImagemThirtyFive}>35</button>
            <button onClick={this.changeImagemThirtySix}>36</button>
            <button onClick={this.changeImagemThirtySeven}>37</button>
            <button onClick={this.changeImagemThirtyEight}>38</button>
            <button onClick={this.changeImagemThirtyNine}>39</button>
            <button onClick={this.changeImagemFourty}>40</button>
            <button onClick={this.changeImagemFourtyOne}>41</button>
            <button onClick={this.changeImagemFourtyTwo}>42</button>
            <button onClick={this.changeImagemFourtyThree}>43</button>
            <button onClick={this.changeImagemFourtyFour}>44</button>
            <button onClick={this.changeImagemFourtyFive}>45</button>
            <button onClick={this.changeImagemFourtySix}>46</button>
            <button onClick={this.changeImagemFourtySeven}>47</button>
            <button onClick={this.changeImagemFourtyEight}>48</button>
            <button onClick={this.changeImagemFourtyNine}>49</button>
            <button onClick={this.changeImagemFifty}>50</button>
            <button onClick={this.changeImagemFiftyOne}>51</button>
            <button onClick={this.changeImagemFiftyTwo}>52</button>
            <button onClick={this.changeImagemFiftyThree}>53</button>
            <button onClick={this.changeImagemFiftyFour}>54</button>
            <button onClick={this.changeImagemFiftyFive}>55</button>
            <button onClick={this.changeImagemFiftySix}>56</button>
            <button onClick={this.changeImagemFiftyEight}>58</button>
            <button onClick={this.changeImagemFiftyNine}>59</button>
            <button onClick={this.changeImagemSixty}>60</button>
            <button onClick={this.changeImagemSixtyOne}>61</button>
            <button onClick={this.changeImagemSixtyTwo}>62</button>
            <button onClick={this.changeImagemSixtyThree}>63</button>
            <button onClick={this.changeImagemSixtyFour}>64</button>
            <button onClick={this.changeImagemSixtyFive}>65</button>
            <button onClick={this.changeImagemSixtySix}>66</button>
            <button onClick={this.changeImagemSixtySeven}>67</button>
            <button onClick={this.changeImagemSixtyEight}>68</button>
            </div>
            
        </Rules>
       
      </Container>
    );
  }
}
