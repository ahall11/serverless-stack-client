const dev = {
  STRIPE_KEY: "pk_test_51GzbAcAamKfXFmNBZsYtbIXK7KjR1ldLJ5SepFET0JVkgXDAxXGWbqmax4jcTy8dAWXOzYK1gTCVRdF7JCxwE2Tc00i0hxDasm",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ekzv67y91f8l"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://api.alexanderjhall.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_YLYwLdpTH",
    APP_CLIENT_ID: "35qnevv92s4d583es7s6a6n7gh",
    IDENTITY_POOL_ID: "us-west-2:878cbf85-500c-4323-8686-7f7b397e12f0"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GzbAcAamKfXFmNBZsYtbIXK7KjR1ldLJ5SepFET0JVkgXDAxXGWbqmax4jcTy8dAWXOzYK1gTCVRdF7JCxwE2Tc00i0hxDasm",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-lfet5eflbf57"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://api.alexanderjhall.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_wgUDYdFHS",
    APP_CLIENT_ID: "5v6a8i4tornjo5pdm0g0k0vse6",
    IDENTITY_POOL_ID: "us-west-2:d4b3a7a7-fe3f-4dc8-ae8b-ac3b77a5d5a4"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};