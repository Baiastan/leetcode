/*

Proxy
    Forward Proxy - Client Side
        VPN for clients
        They can store and cache frequently used websites for fast access
        It logs user activit. What websites clients are visiting and etc
        Can bypass restricted websites and content

    Reverse Proxy - Server Side
        Hides ip addresses of servers so clients see only  proxy ip address
        Protects and blocks DDoS attacks
        Load balancing



Accessibility in Web Design
    1. Resizable text
    2. Right colors / Color contrast
    3. Text readers
    4. Tab accessible
        Focus State
    5. Video transcripts
    6. Form Labels
        When a user clicks on text, it should focus on input
    7. Alt tags for images.
    8. Semantical HTML - correct markups
    9. ARIA attributes
        Accessible Rich Internet Applications - for people with bad vision
            - Screen readers
            

Latency / accuracy


api design
    rest apis
        Representational State Transfer
            GET -> /books/
            POST -> /books/
            GET -> /books/123


    graphql
        Facebook built it
        Main purpose is to navigate relational graph
        Client-side data shaping
        Types
        Introspection/ auto documentation

        As frontend developer, I should be becareful in querying complex graphs

        GET method is to get a playground in development

        Quesries are always sent as POST method


        POST -> /graphql -> query {
                               books    -> read request
                            }
                      -> mutation {
                            createBook    -> write request
                      }
                    
                      -> query {
                            author(id:5)
                      }

        we need define types in graphql
                      ID, String, Number, 
                      ! this means there is no option but to send or post

        
        Cons
            N+1 problem
            

                    





design tiktok online shops
    








*/
