```python
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import padding
import base64
import os

class EncryptionUtils:

    @staticmethod
    def generate_key(password: str, salt: str):
        password = password.encode()
        salt = salt.encode()
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(password))
        return key

    @staticmethod
    def encrypt_data(key: str, data: str):
        f = Fernet(key)
        encrypted_data = f.encrypt(data.encode())
        return encrypted_data

    @staticmethod
    def decrypt_data(key: str, encrypted_data: str):
        f = Fernet(key)
        decrypted_data = f.decrypt(encrypted_data)
        return decrypted_data.decode()

    @staticmethod
    def generate_rsa_key():
        key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048,
        )
        return key

    @staticmethod
    def save_rsa_key(key, path):
        with open(path, "wb") as key_file:
            key_file.write(key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.PKCS8,
                encryption_algorithm=serialization.NoEncryption()
            ))

    @staticmethod
    def load_rsa_key(path):
        with open(path, "rb") as key_file:
            key = serialization.load_pem_private_key(
                key_file.read(),
                password=None,
            )
            return key
```