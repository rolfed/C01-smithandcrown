import axios from 'axios';

// const BASE_URL = 'https://citadel-miner.appspot.com/data/v1/converter?set=devtest';
export {getData};

function getData(data) {
    return axios
        .get("https://citadel-miner.appspot.com/data/v1/converter?set=devtest")
        .then(function(response){
            console.log(`Response: ${response}`);
        })
        .catch(function(err){
            console.log(`Error: ${err}`);
        });
};

