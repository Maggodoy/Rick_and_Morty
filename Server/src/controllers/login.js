// Prueba esto temporalmente para ver si el error desaparece
const login = async (req, res) => {
    try {
        // Comentamos la base de datos por un segundo para ver si arranca
        return res.status(200).json({ access: true });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = login;