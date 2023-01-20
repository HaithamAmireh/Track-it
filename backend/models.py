from exts import db


"""
class ExpenseEntry
    id:int primary key
    amount: float
    title: str
    category: str
"""

class ExpenseEntry(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(), nullable=False)
    amount = db.Column(db.Float(), nullable=True)
    category = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f"<Entry {self.title}>"


    def save(self):
        db.session.add(self)
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    def update(self,amount, title, category):
        self.amount = amount
        self.title = title
        self.category = category
        db.session.commit()


"""
class User:
    id: int primary_key
    username : str
    email : String
    password : string text
"""

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False)
    password = db.Column(db.Text(), nullable=False)
    def __repr__(self):
        return f"<User {self.username}>"















