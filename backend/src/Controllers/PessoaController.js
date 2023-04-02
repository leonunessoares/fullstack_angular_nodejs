const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbpessoa',
  password: 'teste',
  port: 5432,
})
exports.post = (req, res) => {
  try {
  const { nome } = req.body
  
  pool.query('INSERT INTO pessoa_node (nome) VALUES ($1)',
  
      [nome],
        (err, data) => {
         res.status(201).json({
           error: null,
           message: "Registro inserido com sucesso!",
         });
       }
      );
    } catch (error) {
    res.status(500).json({
    error: error.message,
    message: "Ocorreu um erro na inclusão!",
    });
    }
  };
  
 exports.update = (req, res) => {
  try {
        const { id } = req.params;
        const { nome } = req.body;
        pool.query(
        "UPDATE pessoa_node SET nome = $1 WHERE id = $2",
        [nome, id],
        (err, data) => {
          if (err) throw err;
          
            res.status(201).json({
              err: null,
              message: "Registro atualizado com sucesso",
            });
          }
        );
      } catch (error) {
        res.status(500).json({
          err: error.message,
          message: "Ocorreu um erro na alteração",
        });
      }
    };
  
exports.delete = (req, res) => {
  try {
    const { id } = req.params;
    pool.query(
    "delete from pessoa_node where id = $1",
    [id], (err, data)  => {
      if (err) throw err;
      
        res.status(201).json({
          err: null,
          message: "Registro excluído com sucesso",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      err: error.message,
      message: "Ocorreu um erro na exclusão",
    });
  }
};
  
 exports.getAll = (req, res) => {
    pool.query('SELECT * FROM pessoa_node ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }
  
exports.get = (req, res) => {

        const { id } = req.params;
        pool.query("SELECT * FROM pessoa_node WHERE id=$1", [id],
        (error, result) => {
            if (error) throw error;
            res.status(200).json(result.rows[0]);
        }
    );
};