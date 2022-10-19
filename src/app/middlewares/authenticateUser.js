/*
Função para verificar se usuario está com token valido!!! 
caso sim prosigua caso não retorna algum msg abaixo!!
*/

exports.authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            message: `Falha ao autenticar, verifique o token!`,
            statusCode: req.statusCode
        })
    }

    //Favor realizar o download do JWT e passar o secrete aqui tbm !!
    jwt.decode(token, 'SECRETE AQUI!!', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: `Falha ao autenticar, token invalido!`,
                statusCode: req.statusCode
            })
        }
        req.user = decoded;
        next();
    })
}