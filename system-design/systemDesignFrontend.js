//Five topics to learn in systems design frontend interview
/*
1.Features
    MVP (minimum viable product)
    High level estimation
        data volume
        peak traffic
    Core functionality

2. Non-Functional Requirement
    Performance
        Cache
        CDN
        Laod on demand / preload
        Page splitting
    Offline mode
        localStorage
        indexedDB
    Security
        XSS
        CSRF
    High Availability
        load balancer
        health check

3.User experience
    Accessibility
        Keyboard navigation
        Screen Reader
        Colour Contrast
    User Friendly
        Loading Inidicator
        Error Message
        Partially Rendering

4. Backend API
    API Style
        RESTful
        GraphQL
        RPC
    Happy paths
        Data Structure
    Pagination
        Sorting
        Data Structure
    Error Handling
        Recoverable failure - Retrying
        Uncoverable failure
    Security
        API key
        HTTPS - Certificate
        OAuth2
5. Engineering
    Build script
        package.json
        shell script
    Building Processing
        esbuild
        webpack
    CI/CD
        Testing
        Visual Regression
        End to End
        eslinting
        type checks
*/

//Design Fundamentals

/*
Client <-> Server Model




dig algoexpert.io

gives an ip address of the website

----------Storage---------------

Write ----> Database ----> Read

Database is just a server

Disk -> If database writes data to Disk, it will be there even if server goes south
Memory -> if database writes data to Memory, it will be lost if server goes down

Writting and Reading from Memory is faster than from Disk

------------Latency and Throughput------------

How long does it take to a data to get from one point to next point

---latency
1,000,000 microseconds in 1 second

Reading
1 MB memory 250 Micro seconds
1 MB SSD (Disk) 1000 Micro seconds

Sending
1 MB over 1 Gb per second network 10,000 ms
1 MB over HDD (Hard Drive) 20,000 ms

packet (less than 1 mb) CA -> Netherlands -> CA 150,000 ms (it takes time for electricity to travel :D)

---Throughput


How many requests can a server process.
How many bits can a server recieve or send.
Sever can get over millions of requestes in one second



---------Availability-----------

Nines -> 99% two nines in the industry, 99.9% three nines, 99.99% 4 nines 

99% is 3.65 days down per year which is really bad in the industry


five nines - 5.26 minutes per year, HA - high availability

SLA/SLO (Service level Objective) - Service Level Agreement - we guarentee you this much time of HA

What parts of my system is really critical to require HA (five nines)?
What parts of my system is not highly critical to require HA

--Redundancy

The process of replicating parts of a system in an effort to make it more reliable

Multiplying servers. having multiple servers to avoid a single point of failuer. In this case, we need to have a load balancer.
but load balancer can also fail. Therefore we can have multiple load balancers too.

Passive redundancy -> if one the servers dies, nothing will really happen, because other servers will continue working
Active redundancy -> if only one server was making a specific job and it failed, other servers will know about it and reconfigure to take over
duties of the failed server


----Proxy (Forward and Reverse Proxy)

Forward Proxy is on client's team

When a client sends request to a Server, it will go through first a Forward Proxy
Then server sends back a response to Forward Proxy, then Forward Proxy forwards it to Client
A Forward proxy is a middle man and can change for example the IP address of a client, before sending to server (Hide identity)
Server has no idea about Forward Proxy

Reverse Proxy is on server's team

Reverse Proxy acts on behalf of a Server.
Client might not know that a request sent to a Server is actually going though a Reverse Proxy first and
then only to Server.
Client has no idea about Reverse Proxy


----Load Balancers-----

Software Load Balancers

Hardware Load Balancers



----------------Hashing---------- 
Consistent hashing

Randevu Hashing


SHA

Short for "Secure Hash Algorithms", the HSA is a collection of cryptographic hash functions user in the industry.
These days, SHA-3 is a popular choice to use in a system




-------Relational Databases--------


ACID

A - automacity -> Transfer funds from one bank to another bank -> two operations - they will either all succeed or all fail
C - Consitency -> any future transaction will take into account any past transactions, there will be no stale transactons
I - Isolation -> transactions can occur at the same time, but ultimately they will be done as if they put in a queue
D - Durability -> when make a trasaction in a database, the effects are permanent


database index ->  





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Facebook news feed Facebook news feed Facebook news feed Facebook news feed Facebook news feedFacebook news feed Facebook news feedFacebook news feed
Facebook news feed Facebook news feed Facebook news feed Facebook news feed Facebook news feed Facebook news feed Facebook news feed Facebook news feed



1.General Requirements
2.Specific Requirements
3. Components Achitecture
4. Data entities
5. Data Api
6. Data Store
7. Inifinite Scroll
8. Optimization
9. Accessibility



1 -> 
1.Infinite Scrollable news feeds where stoires appears based on user subscriptions
2. User can share the story
3. User can post the story and attach comments, links, images and videoes

Data models

type Story {
    id: number;
    comments: Comment[]
    media: Media[]
    date: number;
    content: string;
    OriginType : {
        id: string;
        tpye:OriginType;
        name:string;
        data...
    }
}

type Comments = {
    id: number;
    authorId: string;
    date: number;
    media: Media[];
    date: number;
    content: string;
}

type Comment = {
    type: link | video;
    url: string
}



Data Api

1. getPosts(api_key, user_id, exludeComments, cursor (timestamp), pageSize, minId)
2. createPost(api_key, user_id, post_data)
3. craeteComment(api_key, user_id, post_id, comment_data)
4. subsicribeNewsStories (SSE)




Api -> Rest 

Data Store -> News Feed 


Frontend System design important to know ->
1.Long Polling -> full request
2. Web Sockets -> bidericational data transfering, very fast, in real time, do not support http2 protocol
3. SSE (service side events) -> Very effective, easy to load balance, supports HTTP2, longer latency than web sockets


Infinite Scroll

Top Sentinel

Bottom Sentinel

Sliding Window


Optimization

Network Performance
gzip -> brottle

webp -> png -> Image Optimization Service -> CDN
 - images -> lazy load images

HTTP2 -> Bundle Splitting ->
feed
header
vendor
analytics scripts

-> loading seperately


Rendering Performance

SSR - server side rendering for some pages
CSS/Scripts - Inline ctitical styles, Inline critical scripts -> load scripts defer

CSS class naming strategy -> keeping classNames is good for browsers


Javascript performance
 Do Less stuff
 Do stuff Async
 Cach Results
 Web Workers - do some haevy job in web worker? (need to find out)



PWA mode - Plane Mode

Application Cache with Service Workers? (need to find what is service workers and web workers toor)

feed.js, feed.css story data images


Accessibility

1. Support different color schema - for people with color blindness
2. All inputs and text areas and other elements have aria-live
3. Image als need to  have alt attributes

Hot Keys:
1. New Story
2. Post Story
3. Scoll Down
4. Scroll Top
5. Call for help
6. Return to main menu 
7. Sharing options




Typeahead Design

1.General Requirements
2. Functional REquirements
3. Components Architecture
 -high level mock up
 -dependency graph
4. Api design
5. Store Design
6. Optimization
7. Accessibility

 1. General Requirements ->
    1. Widget provides search items results based on the query user typed in
    2. The search results should be costumizable
    3. Widget can work with any format and also with static or async data

2. Functional Requirements
    1. Network Efficiency
    2. we want to cache results
    3. Widget should configurable
        - cacheSize
        - filterFunction
        - item representation
        - minQuery, we dont do anything untill string size is 10 for example
    4. Widget should work on wide range of devices and be accessible from keyboard
    5. Performance Optimized

3. High Level mockups


4. Property Design /Api design

type Props<T> = {
    getResults: (query: string) => Promise<T[]> generic Type
    minQuery: number = 3;
    maxResults: number = 10;
    renderItem: (datum: T) => HTMLElement
    updateItem: (el: HTMLElement) => void
    className: string;
    cacheSize: number = 5
}


5. Store Design:




SeachInput sends api to server -> SERVER API -> States of the Server -> 

State model:
    resultsMap: FixedMap<string, T[]>
    data: T[]
    cacheSize: number
    pageSize: number
    currentPage: number
    minQuery: number
    template: (datum: T) => HHTMLElement
    onQuery: (query: String, data: T[]) => Promise<T>



6. Optimization/Performance

Network
    debounce(search less)
    caching
        Server Cache - we dont control, Browser Cache - we dont control, Widget Cache -> clear on timeout

Rendering
    DOM -> 
        virtualization
                    -> Maintain constant number of nodes
                    -> Do not delete and insert nodes - we update it
        CSS  
            ->  use css animation than javascript animation
            -> avoid reflows - do not change width and height of the item
            -> CSS naming convention
    Perception ->
        -> Skeletons, loaders, and placeholders

Javascript
    Do Staff async
        -> web workers for static filtering of many elements
    Use server filtering for large data

Accessibility
    1. Keyboard navigation
        1. shortcuts for easy access
        2. Tab items
        3. Close the shorcut
        4. Search
    2. Visualization
        1. we want to enforce rems in our app
    3. Screen reader friendly
        1. Provide aria-live field
        2. Use aria attributes on item to give a correct item role

NPM Package Distribution

APP <-- NPM Registry

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Chat Application Chat Application Chat Application Chat Application Chat Application Chat Application
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1. API
    protocol choosing
    ---Long Polling
        pros:
            1. HTTP benefits
            2. Barely Simple
        cons: 
            1. Longer latency because of network changes
            2. Connections timeout
            3. Traffic Overhead - we always send http requests
    ---Web Sockets
        pros:
            1. Duplex communication
            2. Super Fast
        cons:
            1. Constant connections - Keeping websocket connection is expensive
            2. HTTP2 is not compatible
            3. Web-Sockets hard to load balance
            4. We need to do a lot of stuff which is already done in HTTP2 protocol
            5. can be problematic with firewalls and proxies filtering TCP? trafic
    ---SSE
        pros:
            1. HTTP2 benefits and it also compatible with HTTP2
            2. we recieve only a piece of our data in text format - we dont have headers and etc
            3. SSE events do not waste devices resource. Resource-efficient
            4. SSE are pretty to load balance with correct sever configuration
        cons:
            1. Weird api
            2. Undirectional - server can only send to client
            3. it has only text data


    SSE is the api choice. With this choice we have to make trade off with posting message to server with simple http request. Since we get more messages thna we get, it is fine
    why is this tradeoff - because when we make post request, we will be sending headers and etc which will create more space.

API methods

---- subscribeForMessages(api_key, user_id, timesstamp)
--- getContacts(api_key, user_id)
--- attachMedia(api_key, user_id, message_id, binary_data)
--- sendMessage(api_key, user_id, message)


Api Data

    typeContact = {
        id: string;
        name: string;
    }

    typeMessage = {
        id:string;
        content: string;
        attachments?: Attachment[];
        authorId: string;
        receiverID: string;
    }

    typeAttachment = {
        id: string;
        message_id: string;
        type: 'link' | 'video' .. etc
        content: URL
    }

2. Store
    messages: {id: messages[]}
    contacts: {id: contact}
    attachments: {id: attachments[]}



3. Optimization

Network Performance
 1. GZIP
 2. brottle(browsers)
 3.HTTP2
    1. Bundle Splitting
        1. vendore_code
        2. chat code
 4. webp format for images -> fallback png 

Rendering Performance
    inline critical resources
    non-critical in defer mode
    load analytic later
    CSS naming, keet it shorter



*/
