import fs from 'fs';
import path from 'path';

const logDirectory = path.join(process.cwd(), 'logs');
const logFile = path.join(logDirectory, 'test.log');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

function formatMessage(level, message) {
  const timestamp = new Date().toISOString();

  return `[${timestamp}] [${level}] ${message}`;
}

function writeLog(level, message) {
  const formattedMessage = formatMessage(level, message);

  console.log(formattedMessage);

  fs.appendFileSync(logFile, `${formattedMessage}\n`, 'utf8');
}

const logger = {
  info(message) {
    writeLog('INFO', message);
  },

  warn(message) {
    writeLog('WARN', message);
  },

  error(message) {
    writeLog('ERROR', message);
  },

  debug(message) {
    writeLog('DEBUG', message);
  },
};

export default logger;
