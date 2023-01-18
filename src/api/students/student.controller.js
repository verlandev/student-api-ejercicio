const Student = require('./student.model')

const indexGet = async (req, res, next) => {
    try {
        const students = await Student.find();
        return res.status(200).json(students)
    }
    catch(error){
        return next(error)
    }
}

const createPost = async (req, res, next) => {
    
    try{
        console.log(req.body);
        const studentToBeCreated = new Student (req.body);
        const created = await studentToBeCreated.save()
        return res.status(201).json((created))

    } catch(error) {
        return next(error)
    }
}

const editPut = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fields = {...req.body}
        const options = { new:true };
        const edited = await Student.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } 
    catch(error) {
        return next(error);
    }
}

const getByName = async (req, res, next) =>{

    try{
        const {name} = req.params;
        const found = await Student.find({name: name});
        return res.status(200).json(found)

    } catch (error) {
        return next(error)
    }

}

const getById = async (req, res, next) =>{

    try {

        const {id} = req.params;
        const found = await Student.findById(id);
        return res.status(200).json(found)

    }catch (error){
        return next(error)
    }
}

const deleteStudent = async (req,res,next) => {

    try {
        const {id} = req.params;
        const deleted = await Student.deleteMany({_id:id})
        if (deleted.deletedCount){
            return res.status(200).json('Estudiante eliminado con éxito')
        } else {
            return res.status(200).json('No se encuentra el elemento para eliminar')
        }

    } catch (error) {
        return next(error)
    }
}


module.exports = {
    indexGet,
    createPost,
    editPut,
    getByName,
    getById,
    deleteStudent
}