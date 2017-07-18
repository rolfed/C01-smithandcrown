import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import './App.css';
import axios from 'axios';
import From from 'react-select'
import To from 'react-select'

class Converter extends Component {
  constructor(props) {
    super(props);

      this.state = {
          currencyObj: null,
          response: null,
          value: 'Select',
          from: 'Select',
          to: 'Select',
          amount: ' ',
          convert: 'Convert',
          total: 0,

      };

      this.updateStateFrom = this.updateStateFrom.bind(this);
      this.updateStateTo = this.updateStateTo.bind(this);
      this.updateStateAmount = this.updateStateAmount.bind(this);
      this.calc = this.calc.bind(this);
      this.validator = this.validator.bind(this);
  }

  componentDidMount() {
      axios
          .get(`https://citadel-miner.appspot.com/data/v1/converter?set=devtest`)
          .then((response) => {

                const data = response.data;
                const currencies = [];

                for(let label in data ){
                    const value = label;
                    const clearableValue = false;
                    currencies.push({label, value, clearableValue });
                };

                this.setState({
                    currencyObj: currencies,
                    response: response.data
                });
          })
          .catch(function(err){
                console.log('Error: ', err);
          });
  }

  updateStateFrom(val){
      this.setState({ from: val.value });

      if(this.validator()){
        this.calc();
      }
  }

  updateStateTo(val){
      this.setState({ to: val.value });

      if(this.validator()){
        this.calc();
      }
  }

  updateStateAmount(e){
      let amount = parseInt(e.target.value, 10);
      this.setState({ amount: amount });

      if(this.validator()){
        this.calc();
      }
  }

  validator(){
      let from = this.state.from;
      let to = this.state.to;
      let amount = this.state.amount

      if(from === 'Select' || to === 'Select' || from === to){
          return false;
      };

      if(amount <= 0){
          return false;
      }

      return true;
  }

  calc(event){
      let from = this.state.from;
      let to = this.state.to;
      let change  = from + to;
      let amount = parseInt(this.state.amount, 10);

      if(event){
        event.preventDefault();
      };

      // this.response.data.BTC.quotes.BTCUSD
      switch (change) {
          case 'BTCETH':
              this.setState({
                  total:  (this.state.response.BTC.quotes.BTCETH * amount).toFixed(5)
              });
              break;
          case 'BTCEUR':
              this.setState({
                  total: (this.state.response.BTC.quotes.BTCEUR * amount).toFixed(2)
              });
              break;
          case 'BTCUSD':
              this.setState({
                  total: (this.state.response.BTC.quotes.BTCUSD * amount).toFixed(2)
              });
              break;
          case 'BTCZEC':
              this.setState({
                  total: (this.state.response.BTC.quotes.BTCZEC * amount).toFixed(5)
              });
              break;
          case 'ETHBTC':
              this.setState({
                  total: (this.state.response.ETH.quotes.ETHBTC * amount).toFixed(5)
              });
              break;
          case 'ETHEUR':
              this.setState({
                  total: (this.state.response.ETH.quotes.ETHEUR * amount).toFixed(2)
              });
              break;
          case 'ETHUSD':
              this.setState({
                  total: (this.state.response.ETH.quotes.ETHUSD * amount).toFixed(2)
              });
              break;
          case 'ETHZEC':
              this.setState({
                  total: (this.state.response.ETH.quotes.ETHZEC * amount).toFixed(5)
              });
              break;
          case 'EURBTC':
              this.setState({
                  total: (this.state.response.EUR.quotes.EURBTC * amount).toFixed(5)
              });
              break;
          case 'EURETH':
              this.setState({
                total: (this.state.response.EUR.quotes.EURETH * amount).toFixed(5)
              });
              break;
          case 'EURUSD':
              this.setState({
                total: (this.state.response.EUR.quotes.EURUSD * amount).toFixed(2)
              });
              break;
          case 'EURZEC':
              this.setState({
                  total: (this.state.response.EUR.quotes.EURZEC * amount).toFixed(5)
              });
              break;
          case 'USDBTC':
              this.setState({
                  total: (this.state.response.USD.quotes.USDBTC * amount).toFixed(5)
              });
              break;
          case 'USDETH':
              this.setState({
                  total: (this.state.response.USD.quotes.USDETH * amount).toFixed(5)
              });
              break;
          case 'USDEUR':
              this.setState({
                  total: (this.state.response.USD.quotes.USDEUR * amount).toFixed(2)
              });
              break;
          case 'USDZEC':
              this.setState({
                  total: (this.state.response.USD.quotes.USDZEC * amount).toFixed(5)
              });
              break;
          case 'ZECBTC':
              this.setState({
                  total: (this.state.response.ZEC.quotes.ZECBTC * amount).toFixed(5)
              });
              break;
          case 'ZECETH':
              this.setState({
                  total: (this.state.response.ZEC.quotes.ZECETH * amount).toFixed(5)
              });
              break;
          case 'ZECEUR':
              this.setState({
                  total: (this.state.response.ZEC.quotes.ZECEUR * amount).toFixed(2)
              });
              break;
          case 'ZECUSD':
              this.setState({
                  total: (this.state.response.ZEC.quotes.ZECUSD * amount).toFixed(2)
              });
              break;
          default:
              //Statements executed when none of the values match the value of the
              break;
      }
  }

  render() {
    return (
        <div className="App-wrapper">
            <div className="App-converter">
               <div className="App-converter--from">
                    <h2>from</h2>
               </div>
               <div className="App-converter--to">
                    <h2>to</h2>
               </div>
            </div>
            <div>
                <form onSubmit={this.calc} className="App-converter">
                    <From
                        className="App-converter--from"
                        name="From"
                        value={this.state.from}
                        options={this.state.currencyObj}
                        onChange={this.updateStateFrom}
                    />
                    <To
                        className="App-converter--from"
                        name="To"
                        value={this.state.to}
                        options={this.state.currencyObj}
                        onChange={this.updateStateTo}
                    />
                    <div className="App-converter--input">
                        <label>Amount</label>
                        <input placeholder="Enter amount" type="number" value={this.state.amount} onChange={this.updateStateAmount}/>
                    </div>
                    <div className="App-converter--button">
                        <input type="Submit" defaultValue="Convert"  className="App-converter--button__gray" />
                    </div>
                    <div className={"App-converter--total " + (this.state.total > 1 ? 'show' : 'hidden')}>
                        <div className="App-converter--total__arrow" />
                        <span className="App-converter--total__gray">{this.state.amount + ' ' + this.state.from + ' = '  + this.state.total + ' ' +  this.state.to}</span>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Converter;
