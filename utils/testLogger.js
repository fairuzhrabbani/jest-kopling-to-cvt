import logger from './logger.js';

export async function withTestLogging(testId, description, testFunction) {
  const startTime = performance.now();

  logger.testStart(testId, description);

  try {
    const result = await testFunction();

    const duration = Math.round(performance.now() - startTime);

    logger.testEnd('PASS', duration);

    return result;
  } catch (error) {
    const duration = Math.round(performance.now() - startTime);

    logger.exception(error);

    logger.testEnd('FAIL', duration);

    throw error;
  }
}
