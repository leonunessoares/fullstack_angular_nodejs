const PessoaController = require('../Controllers/PessoaController');
module.exports = (app) => {
   app.post('/pessoa/', PessoaController.post);
   app.put('/pessoa/:id', PessoaController.update);
   app.delete('/pessoa/:id', PessoaController.delete);
   app.get('/pessoa/', PessoaController.getAll);
   app.get('/pessoa/:id', PessoaController.get);
}