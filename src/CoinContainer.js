import React,{Component} from 'react';
import {choice} from './helpers.js';
import Coin from "./Coin.js";
class CoinContainer extends Component{
    static defaultProps= {
        coins:[
    { side: "head", imgSrc: "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png"},
    { side: "tail", imgSrc: "https://thumbs.dreamstime.com/b/one-rupee-coin-shiny-white-background-30801135.jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state={
            currCoin:null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
       this.handleClick=this.handleClick.bind(this);
    }
        flipCoin(){
        const newCoin= choice(this.props.coins); 
        // console.log(newCoin);
        this.setState(st => {
              return  {
             currCoin: newCoin,
             nFlips: st.nFlips+ 1,
             nHeads:st.nHeads+ (newCoin.side==="head" ? 1:0),
             nTails: st.nTails+  (newCoin.side==="tail" ? 1:0)
           };
        });
        }
        handleClick(e){
            this.flipCoin();
        }
    render(){
        return(
            <div className="CoinContainer">
            <h2>Let's flip a coin !</h2>
            {this.state.currCoin&& <Coin info={this.state.currCoin}/>}
            <button onClick={this.handleClick}> Flip  </button>
        <p> Out of {this.state.nFlips} flips ,there have been {this.state.nHeads} heads and {this.state.nTails} tails . </p>
            </div>
        );
    }
}
export default CoinContainer;