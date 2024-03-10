// logger.js

class Logger {
    constructor() {
      this.logs = [];
    }
  
    log(message) {
      const logEntry = { timestamp: new Date().toISOString(), message };
      this.logs.push(logEntry);
      console.log(logEntry);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  module.exports = Logger;
  