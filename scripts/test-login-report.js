import { spawnSync } from 'node:child_process';

const run = (command, args) => {
  return spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
  });
};

console.log('\n========================================');
console.log('🧪 LOGIN TEST + ALLURE REPORT');
console.log('========================================\n');

console.log('🧹 Cleaning previous test results...\n');

const clean = run('npm', ['run', 'allure:clean']);

if (clean.status !== 0) {
  console.error('\n❌ Failed to clean Allure directories.');
  process.exit(clean.status ?? 1);
}

console.log('\n🧪 Running Jest Login Tests...\n');

const test = run('node', [
  '--experimental-vm-modules',
  'node_modules/jest/bin/jest.js',
  'tests/auth/login_allure.test.js',
]);

const testExitCode = test.status ?? 1;

console.log('\n📊 Generating Allure Report...\n');

const generate = run('npm', ['run', 'allure:generate']);

if (generate.status !== 0) {
  console.error('\n❌ Failed to generate Allure report.');
  process.exit(generate.status ?? 1);
}

console.log('\n🌐 Opening Allure Report...\n');

const open = run('npm', ['run', 'allure:open']);

if (open.status !== 0) {
  console.warn('\n⚠️ Failed to open Allure report automatically.');
}

console.log('\n========================================');

if (testExitCode === 0) {
  console.log('✅ TEST RESULT: PASSED');
} else {
  console.log('❌ TEST RESULT: FAILED');
}

console.log('========================================\n');

process.exit(testExitCode);
