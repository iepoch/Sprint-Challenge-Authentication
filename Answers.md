
1. What is the purpose of using _sessions_?
> The purpose of sessions is to store data that you want to access with a request or multiple requests.Which allows your users to have different sessions per user. It allows us to store and access all the user data as the user is connected to our application.
1. What does bcrypt do to help us store passwords in a secure manner.
>Bcrypt is a hashing algorithm function that will create our passwords unreadable to attackers.
1. What does bcrypt do to slow down attackers?
> Creates a blowfish cipher of our created passwords so that it will take attackers too long to figure out what the real password is.
1. What are the three parts of the JSON Web Token?
> The 3 parts of json web token are Header, Payload, Signature. The header will have the type of token it is and the signing algorithm. The Payload should not have senstive data as this can be seen. However the payload cotains the claims, which is Registerted Claims - This is who issuer, or expreation time, and or subject. Public Claims is the way to help with collision resistant namespace. The Private Claims is used for cusotmiazation. A way to share information btween different parities like two applications shareing ifnromation between on another. The last part of the token is Signature  this is way to verify that nothing was changed ever along the way and it can also check to see if that sender is who they say they are.