export const environment = {
    production: false,
  
    serviceURL: "http://localhost:4013",
    config: {
            auth: {
                "clientId": "2bd86236-b579-4dcd-83db-148842c28cd4",
                "authority": "https://login.microsoftonline.com/f15d5376-796c-4907-a684-814ebbdfed3f",
                "validateAuthority": true,
                "redirectUri": "http://localhost:4200/",
                "postLogoutRedirectUri": "http://localhost:4200",
                "navigateToLoginRequestUrl": true
            },
            cache: {
                "cacheLocation": "localStorage"
            },
            resources: {
                "demoApi": {
                    "resourceUri": "http://localhost:5000", // example "http://localhost:4013"
                    "resourceScope": "api://19ff921b-a7e0-47f8-8fd9-ad8797450438/access_as_user", // here use the client id of the Web API you registered
                }
            },
            scopes: {
                "loginRequest": [
                    "openid",
                    "profile"
                ]
            }
    }
  };