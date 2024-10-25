import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const authOptions = {
    providers:[

        KeycloakProvider()

    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };