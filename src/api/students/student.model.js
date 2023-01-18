const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Debes poner el nombre del alumno"],
        },

        contactEmail: {
            type: String,
            required: true,
            unique: true, 
        },

        age: {
            type: Number,
        },

        startingDate: {
            type: Date,
        },
    },
    {
        timestamps: true,

    }
);

const Student = mongoose.model('students', studentSchema);

module.exports = Student // Si no, no sale en Postman
