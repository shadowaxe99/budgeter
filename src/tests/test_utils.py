```python
import unittest
from src.utils import EncryptionUtils, SecurityUtils

class TestUtils(unittest.TestCase):

    def setUp(self):
        self.test_string = "Test String"
        self.test_data = {"key": "value"}

    def test_encrypt_data(self):
        encrypted_data = EncryptionUtils.encryptData(self.test_string)
        self.assertNotEqual(encrypted_data, self.test_string)

    def test_decrypt_data(self):
        encrypted_data = EncryptionUtils.encryptData(self.test_string)
        decrypted_data = EncryptionUtils.decryptData(encrypted_data)
        self.assertEqual(decrypted_data, self.test_string)

    def test_secure_protocol(self):
        secured_data = SecurityUtils.secureProtocol(self.test_data)
        self.assertNotEqual(secured_data, self.test_data)

if __name__ == '__main__':
    unittest.main()
```