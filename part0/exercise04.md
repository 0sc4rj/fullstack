# Exercise 0.4: New note diagram.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open the browser and visits the page notes
    Browser->>Server: Request the HTML file
    Browser->>Server: Request the CSS file
    Browser->>Server: Request the JavaScript file
    Browser->>Browser: Web page loaded with the notes form
    Server-->>Browser: Server send the HTML file
    Server-->>Browser: Server send the CSS file
    Server-->>Browser: Server send the JavaScript file
    Server-->>Browser: Successful response
    Browser-->>User: Show the page to the user
    User->>Browser: Enters the content of the note
    User->>Browser: Clicks the Save button
    Browser->>Server: Browser sends a request to the server (POST 302 New Note)
    Server->>Server: Server responds to the browser with success
    Server-->>Browser: Server send the (Modified HTML file)
    Server-->>Browser: Server send the CSS file
    Server-->>Browser: Server send the JavaScript
    Server-->>Browser: Server send the Json File
    Server-->>Browser: Successful response
    Browser-->>User: Show the page to the user (New note)
```
