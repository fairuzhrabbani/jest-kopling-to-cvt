import * as allure from 'allure-js-commons';

export async function setTestMetadata(metadata) {
  const {
    testCaseId,
    epic,
    feature,
    story,
    environment,
    severity,
    priority,
    tags,
    description,
    bugId,
    owner,
  } = metadata;

  if (testCaseId) {
    await allure.label('testCaseId', testCaseId);
  }

  if (epic) {
    await allure.epic(epic);
  }

  if (feature) {
    await allure.feature(feature);
  }

  if (story) {
    await allure.story(story);
  }

  if (environment) {
    await allure.label('environment', environment);
  }

  if (priority) {
    await allure.label('priority', priority);
  }

  if (owner) {
    await allure.label('owner', owner);
  }

  if (description) {
    await allure.description(description);
  }

  if (tags?.length) {
    for (const tag of tags) {
      await allure.tag(tag);
    }
  }

  if (bugId) {
    await allure.link(
      `${process.env.JIRA_BASE_URL}/browse/${bugId}`,
      bugId,
      'issue',
    );
  }

  if (severity) {
    await allure.severity(severity);
  }
}
