var admin = require("firebase-admin");

var serviceAccount = require("/Users/mac/nodeTutorial/projectFirst/config/nodeauth-43778-firebase-adminsdk-2ma9o-89cbe6801f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;