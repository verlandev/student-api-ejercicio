const indexGet = (req, res, next) => {
    return res.status(200).json('Ok, students routes working')
}

const createPost = (req, res, next) => {
    return res.status(200).json(('ok Post de create funcionando'))
}

module.exports = {
    indexGet,
    createPost
}