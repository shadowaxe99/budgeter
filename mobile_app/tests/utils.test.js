```javascript
import { encryptData, secureProtocol } from '../utils/securityUtils';

describe('Security Utils', () => {
  test('encryptData function', () => {
    const plainText = 'Test Data';
    const encryptedData = encryptData(plainText);
    expect(encryptedData).not.toBe(plainText);
  });

  test('secureProtocol function', () => {
    const insecureUrl = 'http://example.com';
    const secureUrl = secureProtocol(insecureUrl);
    expect(secureUrl).toBe('https://example.com');
  });
});
```