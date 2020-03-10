'use strict'

var unirest = require('unirest');

const baseURL = 'https://api-football-v1.p.rapidapi.com';
const baseURI = 'api-football-v1.p.rapidapi.com'

class ApiFootball {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }
    get(endPoint, Params){
        return new Promise((resolve, reject) => {
        if (!endPoint) return reject(new Error('Endpoint cannot be empty'))

            //console.log(baseURI);
            //console.log(baseURL);
            //console.log(endPoint);
            //console.log(Params);
            //console.log(this.API_KEY);
            //if(!endPoint){console.log('enpty endPoint')}
            
            var uri = `${baseURL}/${endPoint}/${Params}`;
            //console.log(uri)
            unirest("GET", `${uri}`)
            .headers({
                "x-rapidapi-host": `${baseURI}`,
                "x-rapidapi-key": this.API_KEY
            })
            .end(function (res) {
                if (res.error) throw new Error(res.error);
                if (res.statusCode != 200) return reject(res.body)
                return resolve(res.body)
            });      

        })
    }
}


module.exports = ApiFootball;

