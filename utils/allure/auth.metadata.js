const baseAuthMetadata = {
  epic: 'Authentication',
  feature: 'Login API',
};

const baseRegisterMetadata = {
  epic: 'Authentication',
  feature: 'Registration API',
};

export function loginMetadata({
  story,
  tags = [],
  severity = 'Normal',
  description,
}) {
  return {
    ...baseAuthMetadata,
    story,
    severity,
    tags: [...tags],
    description,
  };
}

export function registerMetadata({
  story,
  tags = [],
  severity = 'Normal',
  description,
}) {
  return {
    ...baseRegisterMetadata,
    story,
    severity,
    tags: [...tags],
    description,
  };
}
