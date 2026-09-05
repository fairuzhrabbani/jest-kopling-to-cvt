const baseAuthMetadata = {
  epic: 'Authentication',
  feature: 'Login API',
  environment: process.env.TEST_ENV,
};

const baseRegisterMetadata = {
  epic: 'Authentication',
  feature: 'Registration API',
  environment: process.env.TEST_ENV,
};

export function loginMetadata({
  testCaseId,
  story,
  tags = [],
  severity = 'Normal',
  priority = 'Normal',
  description,
  bugId,
  owner,
}) {
  return {
    ...baseAuthMetadata,
    testCaseId,
    story,
    severity,
    priority,
    tags: [...tags],
    description,
    bugId,
    owner,
  };
}

export function registerMetadata({
  testCaseId,
  story,
  tags = [],
  severity = 'Normal',
  priority = 'Normal',
  description,
  bugId,
  owner,
}) {
  return {
    ...baseRegisterMetadata,
    testCaseId,
    story,
    severity,
    priority,
    tags: [...tags],
    description,
    bugId,
    owner,
  };
}
