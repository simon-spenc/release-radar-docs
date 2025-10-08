---
title: API Reference
description: Complete API documentation
---

# API Reference

This page contains the complete API reference for our product.

## Authentication

The API now uses JWT (JSON Web Token) based authentication to secure endpoints and manage user sessions.

### `register(credentials)`

Registers a new user account.

**Parameters:**
- `credentials` (Object) - User registration details
  - `username` (string) - Unique username
  - `email` (string) - Valid email address
  - `password` (string) - User password

**Returns:** Promise<{token: string, user: Object}>

**Example:**
```javascript
const { token, user } = await app.register({
  username: 'johndoe',
  email: 'john@example.com',
  password: 'securePassword123'
});
```

### `login(credentials)`

Authenticates a user and returns a JWT token.

**Parameters:**
- `credentials` (Object) - Login credentials
  - `email` (string) - User email address
  - `password` (string) - User password

**Returns:** Promise<{token: string, user: Object}>

**Example:**
```javascript
const { token, user } = await app.login({
  email: 'john@example.com',
  password: 'securePassword123'
});
```

### Token Management

JWT tokens are automatically validated by authentication middleware on protected routes. Include the token in the Authorization header for authenticated requests:

```javascript
fetch('/api/protected-resource', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## Core Methods

### `initialize()`

Initializes the application.

**Parameters:**
- `config` (Object) - Configuration options

**Returns:** Promise<void>

**Example:**
```javascript
await app.initialize({
  apiKey: 'your-api-key',
  environment: 'production'
});
```

### `start()`

Starts the application server.

**Parameters:**
- `port` (number) - Port number (default: 3000)

**Returns:** void

**Example:**
```javascript
app.start(8080);
```

## Release Notes

The release notes API provides endpoints for managing, generating, and browsing release notes history.

### `getReleaseNotes(version)`

Retrieves release notes for a specific version.

**Parameters:**
- `version` (string) - The release version identifier

**Returns:** Promise<{version: string, content: string, publishedAt: Date}>

**Example:**
```javascript
const releaseNotes = await app.getReleaseNotes('v1.2.0');
console.log(releaseNotes.content);
```

### `listReleaseNotes(options)`

Retrieves a list of all release notes.

**Parameters:**
- `options` (Object, optional) - Query options
  - `limit` (number) - Maximum number of results (default: 10)
  - `offset` (number) - Number of records to skip (default: 0)

**Returns:** Promise<Array<{version: string, publishedAt: Date}>>

**Example:**
```javascript
const releases = await app.listReleaseNotes({ limit: 20 });
releases.forEach(release => {
  console.log(`${release.version} - ${release.publishedAt}`);
});
```

### `generateReleaseNotes(data)`

Generates release notes from provided data.

**Parameters:**
- `data` (Object) - Release information
  - `version` (string) - Release version
  - `changes` (Array<string>) - List of changes
  - `repository` (string, optional) - GitHub repository URL

**Returns:** Promise<{content: string, markdown: string}>

**Example:**
```javascript
const notes = await app.generateReleaseNotes({
  version: 'v2.0.0',
  changes: ['Added new feature', 'Fixed bug in authentication'],
  repository: 'https://github.com/user/repo'
});
```

### Markdown Rendering

Release notes support enhanced markdown rendering with syntax highlighting for code blocks. Technical content is automatically formatted for improved readability in the dashboard viewer.

## Release Analysis

The release analysis feature analyzes GitHub releases using AI-powered intelligence.

### AI Model

Release analysis is powered by **Claude Sonnet 4.5**, Anthropic's latest AI model, providing enhanced accuracy and performance when analyzing GitHub releases.

### Benefits

- Improved analysis accuracy
- Enhanced performance
- Up-to-date with the latest AI capabilities
- No deprecation warnings in logs

## Events

### `onReady`

Fired when the application is ready.

```javascript
app.onReady(() => {
  console.log('Application is ready!');
});
```

## Configuration

See the [Configuration Guide](/docs/configuration) for detailed configuration options.