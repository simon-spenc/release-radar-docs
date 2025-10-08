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