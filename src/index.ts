import * as functions from "firebase-functions";

export const sendEmail = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Sending email -> ", {structuredData: true});

  try {
    const dripClient = require('drip-nodejs')(
      {
        token: "YOUR_API_KEY",
        accountId: "YOUR_ACCOUNT_ID"
      }
    );
    
    const workflowId = 222333;
    dripClient.activateWorkflow(workflowId) //assuming this workflow is responsible for setting sign-up emails. 
    .then((response) => {
      // Handle `response.body`
    })
    .catch((error) => {
      // Handle errors
    });
  } catch(err) {
    response.send({code: 400, message: err.message})
  }

  response.send("Email sent from Firebase!");
});
