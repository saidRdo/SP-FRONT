import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret : "AuthOptions-ONEDUSTRY-MISTER-VOITURE",
    providers : [
        CredentialsProvider({
            id : 'credentials',
            name : 'credentials',
            credentials : {
                email : { label : 'email' , type : 'text'},
                password : { label : 'password' , type : 'password' }
            },

            async authorize(credentials) {

                if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid Credentials');
                }

                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                    {
                        login: credentials?.email,
                        password: credentials?.password,
                    }
                ).then()
                    .catch(error=> {
                    throw new Error(error?.response?.data?.message)
                });
                const user = await res.data;

                if (user) {
                    console.log("then",user)
                    return user;
                }
            },
        }),
    ],
    pages:{
        singIn:"/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token;
            return session;
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };