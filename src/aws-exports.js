import { Amplify } from '@aws-amplify/core';

const awsconfig = {
    Auth: {
        region: '<your_region>', // Replace with 'me-central-1'
        userPoolId: '<your_userPoolId>', // Replace with 'me-central-1_hN0Xcm26D'
        userPoolWebClientId: '<your_userPoolWebClientId>', // Replace with '16fe0e0g1fa9apb5ss1ho7da62'
        // ... other Auth options (optional)
    },
    // ... other configurations for Analytics, Storage etc. (optional)
};

Amplify.configure(awsconfig);
