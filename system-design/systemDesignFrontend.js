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


*/
