import { defineConfig } from 'allure';

export default defineConfig({
  name: 'Backend API Store - Jest',
  output: './allure-report',
  historyPath: './allure-history/history.jsonl',
  appendHistory: true,
  historyLimit: 20,
});
