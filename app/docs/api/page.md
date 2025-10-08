---
title: API Reference
description: Complete API documentation
---

# API Reference

This page contains the complete API reference for our product.

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