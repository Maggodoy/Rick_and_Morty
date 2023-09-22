const { User } = ('../DB_connection');

const postUser = async (req, res) => {
    try {
        const {id, name, status, species, gender, origin, image} = req.body;
        if(!id || !name || !status || !species || !image || !gender || !origin) 
        return res.status(400).send('Empy')
        const [favorite, created] = await favorite.findOnCreate({
            where: {id, name, status, species, gender, origin: origin.name, image}
        });
        created ? res.status(200).json(favorite) : res.status(400).send('Alreaddy exists');
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}
moduel.exports = postFavorite;