var AWS = require("aws-sdk");
const colors = require('colors');


const Parameters = [
    "USE_AWS",
    "DJANGO_AWS_ACCESS_KEY_ID",
    "DJANGO_AWS_SECRET_ACCESS_KEY",
    "DJANGO_AWS_STORAGE_BUCKET_NAME",
    "DATABASE_HOST",
    "POSTGRES_DB",
    "POSTGRES_USER",
    "POSTGRES_PORT",
    "POSTGRES_PASSWORD",
    "DJANGO_SECRET_KEY",
    "DJANGO_ALLOWED_HOSTS",
    "DJANGO_DEBUG",
    "DJANGO_MEDIA_URL",
    "DJANGO_MAILGUN_API_KEY",
    "DJANGO_SERVER_EMAIL",
    "MAILGUN_SENDER_DOMAIN",
    "USE_SENTRY",
    "DJANGO_SENTRY_DSN",
    "LOGGING_PATH",
    "LOGGING_LEVEL",
    "HTTPS_ONLY",
    "AUDIT_TRAIL"  
]

const listParameters = (paramGroup) =>{
    
    let ssm = new AWS.SSM({region: 'us-east-1'});
    for( parameter of Parameters){
        if(parameter === null){ continue;}
        let params = {
            Name: `/${paramGroup}/${parameter}`, 
            WithDecryption: true
          };
          ssm.getParameter(params, function(err, data) {
            if (err){ 
                console.log(`${params.Name} is not in Parameter Group.`.red)
               
            } // an error occurred
            else {
                console.log(`${data.Parameter.Name} = ${data.Parameter.Value}`.green);    
            }             // successful response
          });
    }
    
    console.log("*The value 'Provide Value' means that the parameter is in the Group but has no value set in SSM.*");
    console.log('\r\n');

}

module.exports = listParameters;