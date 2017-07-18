import React, { Component } from 'react';
import {getData} from './API';
import './App.css';
import From from 'react-select'
import To from 'react-select'
import 'react-select/dist/react-select.css';

class Converter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
      console.log(`Data: ${getData()}`);
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
                <form onSubmit="" className="App-converter">
                    <From
                        className="App-converter--from"
                        name="From"
                    />
                    <To className="App-converter--to">
                    </To>
                    <div className="App-converter--input">
                        <label>Amount</label>
                        <input placeholder="Enter Amount"></input>
                    </div>
                    <div className="App-converter--button">
                        <button type="submit" className="App-converter--button__gray">Convert</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Converter;
