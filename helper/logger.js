const log4js = require('log4js');

log4js.configure({
  appenders: { console: { type: 'console' } },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    info: { appenders: ['console'], level: 'info' },
    error: { appenders: ['console'], level: 'error' },
  },
});

/* This method is used for creating audit logs in audit log file */
const auditLog = (message, requestId) => {
  const logger = log4js.getLogger('audit');
  logger.addContext('logType', 'audit');
  const auditContent = {
    Message: message,
  };
  if (requestId) {
    auditContent.RequestId = requestId;
  }
  return logger.info(auditContent);
};

/* This method is used for creating INFO logs in application log file */
const infoLog = (message, requestId) => {
  const logger = log4js.getLogger('appLogs');
  logger.addContext('logType', 'OCRLogs');
  const infoContent = {
    Message: message,
  };
  if (requestId) {
    infoContent.RequestId = requestId;
  }
  return logger.info(infoContent);
};

/* This method is used for creating DEBUG logs in application log file */
const debugLog = (message, requestId) => {
  const logger = log4js.getLogger('appLogs');
  logger.addContext('logType', 'OCRLogs');
  const debugContent = {
    Message: message,
  };
  if (requestId) {
    debugContent.RequestId = requestId;
  }
  return logger.debug(debugContent);
};

/* This method is used for creating ERROR logs in application log file */
const errorLog = (message, content, requestId) => {
  const logger = log4js.getLogger('appLogs');
  logger.addContext('logType', 'OCRLogs');
  const errorContent = {
    Message: message,
    Error: content,
  };
  if (requestId) {
    errorContent.RequestId = requestId;
  }
  return logger.error(errorContent);
};

module.exports = {
  auditLog,
  debugLog,
  infoLog,
  errorLog,
};