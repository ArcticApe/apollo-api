const { RESTDataSource } = require ('apollo-datasource-rest');

const APP_KEY = process.env.APP_KEY;

class TransportForLondonAPI extends RESTDataSource {
    constructor () {
        super ();
        this.baseURL = "https://api.tfl.gov.uk";
    }

    getTimeTableFromStationToStation ( app_id, app_key ) {
        return this.get (
            "Line/Bakerloo/Timetable/9400ZZLUBST/to/9400ZZLUBST",
            {
                app_id,
                app_key,
            },
            {
                headers: {
                    'app-key': APP_KEY,
                }
            }
        )
    }

    getStatusBySeverity ( app_id, app_key) {
        return this.get(
            "Line/Status/10",
            {
                app_id,
                app_key
            },
            {
                headers: {
                    'app-key': APP_KEY,
                }
            }
        )
    }

    getRouteByMode ( app_id, app_key ) {
        return this.get(
            "Line/Mode/national-rail/Route",
            {
                app_id,
                app_key,
            },
            {
                headers: {
                    'app_key': APP_KEY,
                }
            }
        )
    }

    getStopPointServesRoutes ( app_id, app_key ) {
        return this.get (
            "StopPoint/940GZZLUASL/Route",
            {
                app_id,
                app_key,
            },
            {
                headers: {
                    'app-key': APP_KEY,
                }
            }
        )
    }


    getStopPointFares (app_id, app_key) {
        return this.get(
            "StopPoint/940GZZLUASL/FareTo/940GZZLUVIC",
            {
                app_id,
                app_key,
            },
            {
                headers: {
                    'app-key': APP_KEY,
                }
            }
        )
    }

    getBikePoints (app_id, app_key) {
        return this.get(
            "BikePoint",
            {
                app_id,
                app_key,
            },
            {
                headers: {
                    'app-key': APP_KEY,
                }
            }
        )
    }
}

module.exports = TransportForLondonAPI;