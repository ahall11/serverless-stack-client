export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GzbAcAamKfXFmNBZsYtbIXK7KjR1ldLJ5SepFET0JVkgXDAxXGWbqmax4jcTy8dAWXOzYK1gTCVRdF7JCxwE2Tc00i0hxDasm",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-ajh"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://98i3bv72fg.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ajQnjm97a",
    APP_CLIENT_ID: "7r38vs1an48uepnfadu9ht1fna",
    IDENTITY_POOL_ID: "us-west-2:0bca0aca-e914-404a-8c45-b2aeee003354"
  }
};
