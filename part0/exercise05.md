# Exercise 0.5: Single page application diagram.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Open the browser and visit the SPA notes page
    Browser->>Server: Request initial files (HTML, CSS, JavaScript)
    Browser->>Browser: Web page loading
    Server-->>Browser: Server sends the HTML files (HTML, CSS, JavaScript)
    Browser-->>User: Show the page to the user
```
