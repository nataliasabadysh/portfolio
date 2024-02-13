---
title: "Server-Client Communication"
date: "2024-02.02"
spoiler: "HTTP Request and Response"
---

### Search 'www.example.com' - What happen next ?

```markdown
When you type example.com into your browser,
the system looks for the fully qualified domain name www.example.com..
The trailing dot represents the root namespace,
which is implicit in most user interactions
but is a fundamental part of the DNS hierarchy.

The browser and the operating system will first attempt
to determine the IP address associated with www.example.com.
either from a local cache or by querying DNS servers.
```

## DNS - Resolution Process

### 1. Operating System requests www.example.com from local cache or DNS server.

### 2. Root Server Lookup: If not in cache, query goes to ROOT server , then to .com TLD server. (CACHED)

### 3. TLD to ANS: TLD directs to example.com's ANS for IP resolution. (CACHED)

### 4. IP Retrieval: ANS provides www.example.com's IP, 192.168.1.1, if not cached. (CACHED)

### 5. Operating System supplies IP to browser.

### 6. Browser uses IP to access www.example.com.

# HTTP Method

```
GET: Retrieve data from a specified resource.
POST: Submit data to a specified resource, often resulting in a change in state or side effects on the server.
PUT: Replace all current representations of the target resource with the request payload.
DELETE: Remove the specified resource.
PATCH: Apply partial modifications to a resource.
OPTIONS: Describe the communication options for the target resource.
HEAD: Similar to GET, but without the response body.
```

# Path - resource or endpoint

```
/users
/api/v1/posts
/search
```

# Header

HTTP headers allow pass additional information with the request or the response.

```
Content-Type: Diffing Type of the body response

Authorization: credentials for authenticating the client to the server.
Accept: Media types that the client is willing to receive.
User-Agent: Contains information about the user agent originating the request.
Cookie: Sends stored cookies from the user's computer.
Common Response Headers:

Content-Type: Indicates the media type of the response.
Content-Length: The length of the response body in octets (8-bit bytes).
Set-Cookie: Sends cookies from the server to the user agent.
Cache-Control: Directives for caching mechanisms in both requests and responses.
ETag: Identifier for a specific version of a resource.

```

# Body

```
Request Body Example: JSON data, form data, XML, etc. (POST, PUT, or PATCH)
Response Body Example: Typically, the data returned by the server, in formats like JSON, XML, HTML, etc.
```

# Status Code

```md
## Informational responses (100–199)

## Successful responses (200–299)

200 OK: The request has succeeded.
201 Created: The request has succeeded and a new resource has been created.
204 No Content: The server successfully processed the request, but is not returning any content.

## Redirection messages (300–399)

301 Moved Permanently: The URL of the requested resource has been changed permanently.
304 Not Modified: Indicates that the resource has not been modified since the last request.

## Client error responses (400–499)

400 Bad Request: The server could not understand the request due to invalid syntax.
401 Unauthorized: The client must authenticate itself to get the requested response.
403 Forbidden: The client does not have access rights to the content.
404 Not Found: The server can not find the requested resource.

## Server error responses (500–599)

500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.
503 Service Unavailable: The server is not ready to handle the request.
```

# HTTP POST Request

### example:

```js
const http = require('http');


const data = JSON.stringify({
  name: 'John Doe',
  email: 'john.doe@example.com'
});

const options = {
  hostname: 'example.com', // The host without HTTP/HTTPS
  port: 80, // or 443 for https
  path: '/api/users'
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();

```

# HTTP POST Response

```js
const express = require("express");
const app = express();

app.use(express.json());

// GET endpoint
app.get("/hello", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Method:", req.method);
  res.send("Received GET request!\n");
});

// POST endpoint
app.post("/hello", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Method:", req.method);
  console.log("Body:", req.body);
  res.send("Received POST request!\n");
});

// All other requests not handled before will fall back to this
app.use((req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "This is a sample response from your server!",
    },
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### We can run Server in the terminal

- Run -> `node server.js`
- Use the following commands

```sh
# GET request
curl http://localhost:8080/hello

# POST request
curl --header "Content-Type: application/json" --request POST --data '{"username": "Natalia"}' http://localhost:8080/hello
```

### response would be

```json
{
  "Headers": {
    "host": "localhost:8080",
    "user-agent": "curl/7.79.1",
    "accept": "*/*",
    "content-type": "application/json",
    "content-length": "23"
  },
  "Method": "POST",
  "Body": {
    "username": "Natalia"
  }
}
```
