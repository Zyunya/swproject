// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import CONFIGS from "../ecosystem.json";
var API_DOMAIN = "http://localhost:888"
export const environment = {
	production: false,
	envName: 'dev',
	API_PORT: 4100,
	API_ENDPOINT : {
		APPLY : `${API_DOMAIN}/api/apply`
	},
	GOOGLE_MAPS_KEY : "AIzaSyAmB791RkbN_FF9wB2bqC5thrC0iMqp5kk"
};
