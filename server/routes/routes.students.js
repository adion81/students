const StudentController = require('../controllers/controller.students');

module.exports = (app) => {
    app.get('/api/students',StudentController.index);
    app.post('/api/create/student',StudentController.create);
    app.get('/api/student/:id',StudentController.show);
    app.put('/api/update/student/:id',StudentController.update);
    app.delete('/api/destroy/student/:id',StudentController.destroy);
    app.post("/api/create/book/:studentId",StudentController.createBook)
}