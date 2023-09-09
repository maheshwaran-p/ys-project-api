"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const addcourse_entity_1 = require("../entities/addcourse.entity");
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
let AddCourseService = class AddCourseService {
    constructor(addCourseRespository) {
        this.addCourseRespository = addCourseRespository;
    }
    async signature() {
        const queryParameters = {
            offset: 0,
            limit: 100,
            filter: "status='active'"
        };
        const oauth_timestamp = Math.floor(Date.now() / 1000);
        const oauth_nonce = Math.floor(Date.now() / 1000);
        const parameters = Object.assign(Object.assign({}, queryParameters), { oauth_consumer_key: 'XEBKLj10QXf4qyDDCMn4cmu8l', oauth_signature_method: "HMAC-SHA1", oauth_timestamp: oauth_timestamp, oauth_nonce: oauth_nonce, oauth_version: "1.0" });
        let ordered = {};
        Object.keys(parameters).sort().forEach(function (key) {
            ordered[key] = parameters[key];
        });
        let encodedParameters = '';
        for (let k in ordered) {
            const encodedValue = escape(ordered[k]);
            const encodedKey = encodeURIComponent(k);
            if (encodedParameters === '') {
                encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`);
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
        encodedParameters = encodeURIComponent(encodedParameters);
        const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;
        console.log("\n\nSignature Base\n\n");
        console.log(signature_base_string);
        let oauth_signature_method = "HMAC-SHA1";
        let oauth_version = "1.0";
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
    async chumma() {
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
            headers: Object.assign(Object.assign({}, await oauth.toHeader(oauth.authorize(request_data, token))), { 'Content-Type': 'application/json' }),
            data: data
        };
        return axios(config)
            .then(function (response) {
            return JSON.stringify(response.data, getCircularReplacer());
        })
            .catch(function (error) {
            console.log(error);
            return error;
        });
    }
    async updateTotal(id, total) {
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(addcourse_entity_1.AddCourse)
            .set({ total: total })
            .where("id = :id", { id: id })
            .execute();
    }
    async findOneCourse(courseId) {
        return await this.addCourseRespository.findOne(courseId);
    }
    async deleteOneCourse(courseId) {
        return await this.addCourseRespository.delete(courseId);
    }
    async getCourse(courseId) {
        return await this.addCourseRespository.findOne(courseId);
    }
    async getAllCourses() {
        return await this.addCourseRespository.find();
    }
    async createCourse(title, description, course, stafflink) {
        return await this.addCourseRespository.save({ title: title, description: description, course: course, stafflink: stafflink });
    }
};
AddCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(addcourse_entity_1.AddCourse)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], AddCourseService);
exports.AddCourseService = AddCourseService;
//# sourceMappingURL=addcourse.service.js.map