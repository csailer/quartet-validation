var AWS = require("aws-sdk");
const colors = require('colors');



const listInstances = () => {

  let param = {

  }
  ec2.describeInstances(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

const getInstanceList = () => {
       
        let ec2 = new AWS.EC2({region: 'us-east-1'});
        let params = {
            Filters: [
              {
                Name: "tag-key", 
                Values: [
                  'Name'
                ]
              }
            ]
        };
        //"aws ec2 describe-instances  --filters "Name=tag:Name,Values=*" --query="Reservations[].Instances[].Tags[].Value"
           const retVal = ec2.describeInstances(params, function(err, data) {
             if (err) console.log(err, err.stack); // an error occurred
             else {  
                const { Reservations } = data;
                const amis = Reservations.map(item => {
                    const instances = item.Instances.map(instance => {
                          return { name: instance.Tags[0].Value, id: instance.InstanceId};
                    });
                  return instances;
                });  
                
                const vals = amis.map(ami => {
                    return ami[0]
                })
                return vals;
             }  

           });
          
          return retVal;
    } 

    module.exports = getInstanceList;