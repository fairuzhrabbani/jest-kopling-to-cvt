import * as allure from 'allure-js-commons';

export const allureStep = async (name, callback) => {
  return allure.step(name, callback);
};
