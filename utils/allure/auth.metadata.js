const baseAuthMetadata = {
  epic: 'Authentication',
  feature: 'Login API',
  tags: ['Authentication', 'Login'],
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
    tags: [...baseAuthMetadata.tags, ...tags],
    description,
  };
}
