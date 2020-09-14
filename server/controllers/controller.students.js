const {Student,Book} = require('../models/model.student');

module.exports = {
    index : (req,res) => {
        // Find get all of the students with in the collection
        Student.find()
            .then(students => {
                res.json({results:students})
            })
            .catch(err => {
                console.log(err);
            })
    },
    create: (req,res) => {
        Student.create(req.body)
            .then(student => {
                res.json({results:student})
            })
            .catch(err => res.json(err.errors))
    },
    show: (req,res) => {
        // FindOne gets a specific document from the collection.
        Student.findOne({_id:req.params.id})
            .then(student => {
                res.json({results:student})
            })
            .catch(err => res.json(err.errors))
    },
    update : (req,res) => {
        Student.findOneAndUpdate({_id:req.params.id},req.body,{useFindAndModify:true,runValidators:true})
            .then(student => {
                res.redirect(`/api/student/${req.params.id}`)
            })
            .catch(err => res.json(err.errors))
    },
    destroy: (req,res) => {
        Student.deleteOne({_id:req.params.id})
            .then(result => res.json({results:result}))
            .catch(err => res.json(err.errors))
    },
    createBook : (req,res) => {
        Book.create(req.body)
            .then(book => {
                Student.findOneAndUpdate({_id:req.params.studentId}, {$push:{books:book}})
                    .then(student => res.redirect(`/api/student/${req.params.studentId}`))
                    .catch(err => res.json(err.errors));
            })
            .catch(err => res.json(err.errors))
    }
}