# Logger

A simple JavaScript Logger package for logging messages with timestamps.

## Installation

```bash
npm install @artemius/logger
```

## Usage

```javascript
const Logger = require('@artemius/logger');

// Create a new instance of the Logger
const logger = new Logger();

// Log messages
logger.log('This is a log message.');
logger.log('Another log message.');

// Get logs
const logs = logger.getLogs();
console.log(logs);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
