# Exercise 0.4: New note diagram.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open the browser and visit the page notes
    Browser->>Server: Request Files
    Browser->>Server: Request the HTML file
    Browser->>Server: Request the CSS file
    Browser->>Server: Request the JavaScript file
    Browser->>Browser: Web page loading
    Server-->>Browser: Server sends the HTML file
    Server-->>Browser: Server sends the CSS file
    Server-->>Browser: Server sends the JavaScript file
    Browser-->>User: Show the page to the user
    User->>Browser: Enters the content of the note
    User->>Browser: Clicks the Save button
    Browser->>Browser: Web page loading
    Browser->>Server: Browser sends a request to the server (POST - New Note)
    Server->>Server: Server responds to the browser with success
    Server-->>Browser: Server sends the (Modified HTML file)
    Server-->>Browser: Server sends the CSS file
    Server-->>Browser: Server sends the JavaScript
    Server-->>Browser: Server sends the data JSON File
    Browser-->>User: Show the page to the user (New note)
```
