module.exports = {
    db: "mongodb://localhost/feed-the-troll",
    app: {
        name: "Feed the troll"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "1t2LIoGAGYolS7S2IHD02Q",
        clientSecret: "vJWIcR6xWumbxCYaRFTRsyQeMxb9ooQsMLtgEsqI",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "cbbe92f493d1f77b3f48",
        clientSecret: "0c39d7bb4a4a85497aecc29ddce3cd75af4f2c96",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "466605285124-aska3ekc4fk9t6q99coiijspgsuc5rbm.apps.googleusercontent.com",
        clientSecret: "T5RfDcKfFVBI9TLCjfXwqDRj",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}