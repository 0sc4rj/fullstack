# Exercise 0.5: Single page application diagram.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open the browser and visit the SPA page
    Browser->>Server: Request Files
    Browser->>Server: Request the HTML file
    Browser->>Server: Request the CSS file
    Browser->>Server: Request the JavaScript file
    Browser->>Browser: Web page loading
    Server-->>Browser: Server sends the HTML file
    Server-->>Browser: Server sends the CSS file
    Server-->>Browser: Server sends the JavaScript file
    Browser-->>User: Show the page to the user
```
