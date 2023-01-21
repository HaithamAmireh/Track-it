from flask import Flask, request
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import ExpenseEntry
from exts import db
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(DevConfig)

CORS(app)

db.init_app(app)

migrate = Migrate(app, db)

api = Api(app,doc='/docs')

#model (serializer) so we can get the db entries as json
entry_model = api.model(
    "Entry",
    {
        "id": fields.Integer(),
        "amount": fields.Float(),
        "title": fields.String(),
        "category": fields.String()
    }
)

@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello world"}


@api.route('/entries')
class EntriesResource(Resource):
    @api.marshal_list_with(entry_model)
    def get(self):
        """Get all entries"""
        entries = ExpenseEntry.query.all()

        return entries, 200

    @api.marshal_with(entry_model)
    def post(self):
        """create an entry"""
        data = request.get_json()

        new_entry = ExpenseEntry(
            title = data.get('title'),
            amount = data.get('amount'),
            category = data.get('category')
        )

        new_entry.save()
        
        return new_entry, 201

@api.route('/entry/<int:id>')
class EntryResource(Resource):
    @api.marshal_with(entry_model)
    def get(self, id):
        """Get a single entry"""
        entry = ExpenseEntry.query.get_or_404(id)
        return entry

    @api.marshal_with(entry_model)
    def put(self, id):
        """updatea an entry"""
        entry_to_update = ExpenseEntry.query.get_or_404(id)
        data = request.get_json()
        entry_to_update.update(data.get('amount'), data.get('title'), data.get('category'))

        return entry_to_update

    @api.marshal_with(entry_model)
    def delete(self, id):
        "delete an entry"
        entry_to_delete = ExpenseEntry.query.get_or_404(id)
        entry_to_delete.delete()
        return entry_to_delete



@app.shell_context_processor
def make_shell_context():
    return {
        "db": db,
        "Entry": ExpenseEntry
    }


if __name__ == '__main__':
    app.run()
