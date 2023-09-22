const { User}= require ('../DB_connection');
const login = async (req, res) => {
  try {
    const {email, password} = req.query;
    if(email === '' || password === '') return res.status(400).send('Empty data');
    const user = await User.findOne(
      {where: {email}}
    );
  } catch (error) {
    res.status(500).send(error.massage);
  }
}

moduel.exports = login;