---
title: "Let's dive into GraphQL"
date: "2024-01-31"
spoiler: "which one to use ? "
---

## <mark>Let's start with History before GraphQL</mark>

## <mark> Why? and When ? </mark>

```
1) The problem was with rendering

"Our biggest mistake was betting too much on HTML."
2012 by Mark Zuckerberg

The solution involved moving data to the server,
but the question arose, "How to store the data? REST or FQL?"

2) And with data-client communication

"We were frustrated with the differences between the data we wanted to use in our
app and the server queries they required."
2015 by Lee Byron

```

## <mark>2015 GraphQL solve the proble by :</mark>

# to address the problem for a growing Facebook.

- Defines a data shape
- Hierarchical
- Strongly Types
- Protocol, not storage
- Introspective
- Version Free

## <mark> REST VS GraphQL</mark>

```
REST:

- The browser sends 1 request and waits for a response.
- It receives the response and sends a 2nd request to the server.
- After receiving the second response, it sends a 3d request.

GraphQL:

- The browser sends a request specifying what data is needed.
- The server then provides the required data in a Single response.

```

## <mark> What Happens When We Write a GraphQL Query</mark>

- The browser parses the query.
- Validates it.
- Runs the resolver.
- Sends back the data.

## GraphQL vs REST Support:

# GraphQL Query vs REST's GET (Read):

# GraphQL Mutation vs REST's Delete, Update, Create

# Subscriptions vs WebSockets

## GraphQL Architecture and Benefits:

## <mark>GraphQL and Client-Driven Development</mark>

# <mark> vs REST - Server-Driven</mark>

## <mark>Benefits of using GraphQL </mark>

- ✅ Better Control Over Fields and Data Structure: GraphQL offers enhanced control over what data is fetched and how it's structured.
- ✅ Efficiency: Reduces the need for multiple endpoints, consolidating data requests.
- ✅ Flexibility: Client-side control allows for a client-oriented approach in data fetching.
- ✅ Simplicity: Streamlines data fetching and manipulation processes.
- ✅ Rapid Iteration: Facilitates faster development cycles.
- ✅ Enhanced Collaboration: Improves synergy between front-end and back-end teams.
- ✅ Reduced Backend Load: More efficient data requests lead to a lighter server load.

## <mark>Advantages of GraphQL</mark>

- Fetching Data: Often involves just a single API call, simplifying the query process.
- Performance: Typically faster, as it minimizes the need for multiple requests.
- Development Speed: Accelerated thanks to efficient data handling and structural flexibility.
- Data Support: Primarily utilizes JSON for data exchange.
- Client Autonomy: Allows clients to dictate the structure of the data they require.
- Self-Documentation: GraphQL schemas and queries inherently provide clear documentation.
- Flexible Parameters: Offers greater flexibility as any field can accept dynamic parameters.

[Video GraphQL: The Documentary]('https://www.youtube.com/watch?v=783ccP__No8&ab_channel=Honeypot')
