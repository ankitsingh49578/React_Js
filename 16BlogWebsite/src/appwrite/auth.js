// This code can be reused in other projects also

import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    // account should be created only when the constructor is called
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)             // Your API Endpoint
            .setProject(conf.appwriteProjectId);       // Your project ID

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // call another method
                return this.login({email, password});
            } else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();            // Logged in
        }
        catch(error){                               // Not logged in
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();            // deleteSessions will logout all the session(from every device)
        }
        catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();      // we have directly made the object and will direction export the object 

export default authService;