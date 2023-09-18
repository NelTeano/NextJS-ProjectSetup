import NextAuth from "next-auth/next"
import GitHubProvider from "next-auth/providers/github"

import User from '../../../../../models/User';
import { connectToDB } from '../../../../../utils/database';

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ], 
    
    callbacks: {

    async session({session}){
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({ account, profile, user, credentials }) {
        try {
        await connectToDB();
        
        console.log(user)
        // check if user already exists
        const userExists = await User.findOne({ email: user.email });
        
        
          // if not, create a new document and save user in MongoDB
        if (!userExists) {
            await User.create({
                email: user.email,
                username: user.name.replace(" ", "").toLowerCase(),
                image: user.image,
            });
        }
            return true
        } catch (error) {
            console.log("Error checking if user exists: ", error.message);
            return false
        }
    }
    
}})


export { handler as GET, handler as POST }