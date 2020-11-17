import React,{Component} from 'react';
class CoinContainer extends Component{
    static defaultProps={
        coins:[
            {side:'heads', url: "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png"},
           {side:'tails', url: "https://thumbs.dreamstime.com/b/one-rupee-coin-shiny-white-background-30801135.jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state={
            currCoin:null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        
           
       
    }
    render(){
        return(
            <div className="CoinContainer">
            <h2>Lets flip the coins</h2>
        <p> Out of {this.state.nFlips} flips ,there have been {this.state.nHeads} heads and {this.state.nTails} tails . </p>
            </div>
        );
    }
}
export default CoinContainer;