const {RESTDataSource} = require('apollo-datasource-rest');

class publicAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.publicapis.org";
    }

    getPublicAPI(){
        return this.get(
            "/entries",{
                entries,
            }
        );
    }
}

module.exports = publicAPI;