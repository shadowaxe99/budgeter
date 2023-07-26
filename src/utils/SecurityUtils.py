```python
import ssl
from src.config import config

def secureProtocol():
    """
    This function creates a secure context using SSL for data transmission.
    """
    context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
    context.options |= ssl.OP_NO_TLSv1 | ssl.OP_NO_TLSv1_1  # Disable lower versions of TLS
    context.load_cert_chain(certfile=config['CERT_FILE'], keyfile=config['KEY_FILE'])
    return context
```