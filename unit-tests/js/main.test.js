const {
  validateCredentials,
  showSuccessAlert,
  showFailureAlert,
  redirectToIndexPage,
} = require('./main');

// Mocks für DOM-Funktionen
global.alert = jest.fn();

// Mock-Funktion für Navigation
const navigateMock = jest.fn();

test('validateCredentials returns true for correct credentials', () => {
  expect(validateCredentials('test', '123')).toBe(true);
});

test('validateCredentials returns false for incorrect credentials', () => {
  expect(validateCredentials('wronguser', 'wrongpass')).toBe(false);
});

test('showSuccessAlert should call window.alert with success message', () => {
  showSuccessAlert();
  expect(global.alert).toHaveBeenCalledWith('Erfolgreich eingeloggt!');
});

test('showFailureAlert should call window.alert with failure message', () => {
  showFailureAlert();
  expect(global.alert).toHaveBeenCalledWith('Falscher Benutzername oder Passwort!');
});

