# Exercise 0.4: New note diagram.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open the browser and visit the page notes
    Browser->>Server: Request initial files (HTML, CSS, JavaScript)
    Browser->>Browser: Web page loading
    Server-->>Browser: Server sends files(HTML, CSS, JavaScript)
    Browser-->>User: Show the page to the user
    User->>Browser: Enters the content of the note
    User->>Browser: Clicks the Save button
    Browser->>Browser: Web page loading
    Browser->>Server: Browser sends a request to the server (POST - New Note)
    Server->>Server: Server responds to the browser with success
    Server-->>Browser: Server sends files  (HTML (Modified), CSS, JavaScript, JSON data)
    Browser-->>User: Show the page to the user (New note)
```
