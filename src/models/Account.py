```python
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from .database import Base

class Account(Base):
    __tablename__ = 'accounts'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    account_type = Column(String, index=True)
    account_number = Column(String, unique=True, index=True)
    balance = Column(Float, default=0)

    transactions = relationship("Transaction", back_populates="account")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
```