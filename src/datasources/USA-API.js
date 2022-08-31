const {RESTDataSource} = require('apollo-datasource-rest');

class usaDataApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://datausa.io";
    }

    getUsaData(drilldowns, measures){
        return this.get(
            "api/data",
            {
                drilldowns,
                measures,
            }
        );
    }
}

module.exports = usaDataApi;