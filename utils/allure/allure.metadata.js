import * as allure from 'allure-js-commons';

export const setTestMetadata = async ({
  epic,
  feature,
  story,
  severity = 'normal',
  tags = [],
  description,
}) => {
  if (epic) {
    await allure.epic(epic);
  }

  if (feature) {
    await allure.feature(feature);
  }

  if (story) {
    await allure.story(story);
  }

  if (severity) {
    await allure.severity(severity);
  }

  if (tags.length > 0) {
    await allure.tags(...tags);
  }

  if (description) {
    await allure.description(description);
  }
};
