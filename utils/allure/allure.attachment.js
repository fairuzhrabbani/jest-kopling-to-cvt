import * as allure from 'allure-js-commons';

export const attachJson = async (name, data) => {
  await allure.attachment(
    name,
    JSON.stringify(data, null, 2),
    'application/json',
  );
};
