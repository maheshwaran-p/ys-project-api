/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AddCourse } from '../entities/addcourse.entity';
import axios from 'axios';
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
@Injectable()
export class AddCourseService {
    config: any;

    constructor(
        @InjectRepository(AddCourse)
        private addCourseRespository: Repository<AddCourse>,
       
    ) { }

    async signature():Promise<string>{
        const queryParameters = {
            offset: 0,
            limit: 100,
            filter: "status='active'"
        }
        const oauth_timestamp = Math.floor(Date.now() / 1000);
        const oauth_nonce = Math.floor(Date.now() / 1000);
        const parameters = {
            ...queryParameters,
            oauth_consumer_key: 'XEBKLj10QXf4qyDDCMn4cmu8l',
            oauth_signature_method: "HMAC-SHA1",
            oauth_timestamp: oauth_timestamp,
            oauth_nonce: oauth_nonce,
            oauth_version: "1.0"
        }

        let ordered = {};
        Object.keys(parameters).sort().forEach(function (key) {
            ordered[key] = parameters[key];
        });
        let encodedParameters = '';
        for (let k in ordered) {
            const encodedValue = escape(ordered[k]);
            const encodedKey = encodeURIComponent(k);
            if (encodedParameters === '') {
                encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`)
            }
            else {
                encodedParameters += encodeURIComponent(`&${encodedKey}=${encodedValue}`);
            }
        }

        console.log("\n\nEncode Parameters\n\n");
        console.log(encodedParameters);


        const method = 'GET';
        const base_url = 'https://api.twitter.com/';
        const encodedUrl = encodeURIComponent(base_url);
        encodedParameters = encodeURIComponent(encodedParameters); // encodedParameters which we generated in last step.
        const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`

        console.log("\n\nSignature Base\n\n");
        console.log(signature_base_string)


        let oauth_signature_method = "HMAC-SHA1";
        let oauth_version = "1.0"
        const consumer_secret = '6POh3FgK2QxxOXlBogMTkK1NB0Dc9pevaYaCbNBKpCmhe39vBP';
        const signing_key = `${consumer_secret}&`;


        const crypto = require('crypto');
        const oauth_signature = crypto.createHmac("sha1", signing_key).update(signature_base_string).digest().toString('base64');
        console.log(oauth_signature);

        const encoded_oauth_signature = encodeURIComponent(oauth_signature);
        console.log(encoded_oauth_signature);

    let params = `OAuth oauth_consumer_key="XEBKLj10QXf4qyDDCMn4cmu8l", oauth_signature_method=="${oauth_signature_method}", oauth_timestamp=="${oauth_timestamp}", oauth_nonce=="${oauth_nonce}", oauth_version="${oauth_version}", oauth_signature=="${encoded_oauth_signature}", oauth_token="271936704-jGWXH2RwOXVZiUPSOoF304Gu6gIDuJZMEjvDWASU"`;

    return params;
    }


    async chumma():Promise<any> {

        const getCircularReplacer = () => {
            const seen = new WeakSet();
            return (key, value) => {
              if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                  return;
                }
                seen.add(value);
              }
              return value;
            };
          };
        const FormData = require('form-data');
                const crypto = require('crypto');
                const oauth = OAuth({
                 
                    consumer: {
                        key: 'XEBKLj10QXf4qyDDCMn4cmu8l',
                        secret: '6POh3FgK2QxxOXlBogMTkK1NB0Dc9pevaYaCbNBKpCmhe39vBP',
                    },
                    
                    signature_method: 'HMAC-SHA1',
                    hash_function(base_string, key) {
                        return crypto
                            .createHmac('sha1', key)
                            .update(base_string)
                            .digest('base64');
                    },
                });
              
                const request_data = {
                    url: 'https://ads-api.twitter.com/11/accounts/18ce550vkdc/custom_audiences/4wmpg/users',
                    method: 'POST',
                     
                };
                const token = {
                    key: '271936704-jGWXH2RwOXVZiUPSOoF304Gu6gIDuJZMEjvDWASU',
                    secret: 'rHGNpR1lnAM4Z9McXyhpEOauwIo98xqu1OilDiZoysCHa',
                };

        var axios = require('axios');
const FormDatas = require('form-data');
var data = JSON.stringify([
    {
      "operation_type": "Update",
      "params": {
        // "effective_at": "2018-05-15T00:00:00Z",
        // "expires_at": "2019-01-01T07:00:00Z",
        "users": [
          {
            "email": [
              "4798b8bbdcf6f2a52e527f46a3d7a7c9aefb541afda03af79c74809ecc6376f3"
            ],
          },
         
        ]
      }
    },
  ]);
const config = {
  method: 'post',
  url: request_data.url,
  headers: {
    ...await oauth.toHeader(oauth.authorize(request_data, token)),
    'Content-Type': 'application/json',
  },
  data : data
  
};
 return axios(config)
.then(function (response) {
    return JSON.stringify(response.data , getCircularReplacer());
})
.catch(function (error) {
  console.log(error);
  return error;
});




        
//         const FormData = require('form-data');
//         const crypto = require('crypto');
//         const oauth = OAuth({
         
//             consumer: {
//                 key: 'XEBKLj10QXf4qyDDCMn4cmu8l',
//                 secret: '6POh3FgK2QxxOXlBogMTkK1NB0Dc9pevaYaCbNBKpCmhe39vBP',
//             },
            
//             signature_method: 'HMAC-SHA1',
//             hash_function(base_string, key) {
//                 return crypto
//                     .createHmac('sha1', key)
//                     .update(base_string)
//                     .digest('base64');
//             },
//         });
//         const twurl = 'https://ads-api.twitter.com/10/accounts/18ce550vkdc/custom_audiences';
      
//         const request_data = {
//             url: twurl,
//             method: 'POST',
             
//         };
//         const token = {
//             key: '271936704-jGWXH2RwOXVZiUPSOoF304Gu6gIDuJZMEjvDWASU',
//             secret: 'rHGNpR1lnAM4Z9McXyhpEOauwIo98xqu1OilDiZoysCHa',
//         };
//         var bodyFormData = new FormData();
//         bodyFormData.append('account_id', '18ce550vkdc');
//         bodyFormData.append('name', 'XYZ');
//         let headerconfig= await oauth.toHeader(oauth.authorize(request_data, token));
//  headerconfig['Content-Type']=`multipart/form-data;`;

//  console.log(headerconfig);
    
      
//       const response = await axios({
//           method: 'post',
//           url: 'https://ads-api.twitter.com/10/accounts/18ce550vkdc/custom_audiences',
//           data: bodyFormData,
//           headers:headerconfig
//       });

//    return response;

  }
    async updateTotal(id:number,total : number):Promise<any>{

      return  await getConnection()
        .createQueryBuilder()
        .update(AddCourse)
        .set({total: total })
        .where("id = :id", { id: id })
        .execute();
 

    }

    async findOneCourse( courseId:number) : Promise<any>{

        return await this.addCourseRespository.findOne(courseId);
      }

      async deleteOneCourse( courseId:number) : Promise<any>{

       return await this.addCourseRespository.delete(courseId);
      }


      async getCourse( courseId:number) : Promise<any>{

      //  return await this.addCourseRespository.delete(courseId);

      return await this.addCourseRespository.findOne(courseId);
       }


    

   async getAllCourses() : Promise<any>{

     return await this.addCourseRespository.find();

   }

   async createCourse(title:string, description:string, course:string,stafflink:string) : Promise<any>{

        return await this.addCourseRespository.save({title:title,description:description,course:course,stafflink:stafflink});

    }


}
