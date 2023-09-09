export declare enum UserType {
    HQ_STAFF = "HQ_STAFF",
    PROJECT_STAFF = "PROJECT_STAFF",
    BENEFICIARY = "BENEFICIARY"
}
export declare class User {
    id: number;
    firstname: string;
    surname: string;
    password: string;
    email: string;
    isStaff: boolean;
    mobileNumber: string;
    doorNumber: string;
    country: string;
    state: string;
    district: string;
    block: string;
    salutation: string;
    userType: string;
    createdAt: Date;
    updatedAt: Date;
}
