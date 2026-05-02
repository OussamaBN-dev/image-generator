import spl from '../config/db.js';

export const getUserCreations = async(req, res)=>{
    try {
        const {userId} = req.auth()

        const creations = await sql `SELECT * FROM creati0ons WHERE user_id = ${userId} Order By created_at DESC`;
        res.json({success: true, creations});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const getPublishedCreations = async(req, res)=>{
    try {

        const creations = await sql `SELECT * FROM creations WHERE publish = true Order By created_at DESC`;
        res.json({success: true, creations});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const toggleLikeCreation =async(req, res) => {
    try {
        const {userId} = req.auth()
        const {id} = req.body 
        const [creation] = await `SELECT * FROM creations WHERE if = ${id}`

        if (!creation){
            return res.json({success: false, message: 'creation not found'})
        }

        const currentLikes = creation.likes;
        const userIdStr = userId.toString();
        let updateLikes;
        let message;

        if (currentLikes.includes(userIdStr)){
            updatedLikes = currentLikes.filter((user) => user !== userIdStr);
            message = 'creation Unliked'
        } else {
            updatedLikes = [...currentLikes, userIdStr]
            message = 'Creation Liked'
        }

        const formattedArray = `{${updatedLikes.json(',')}}`

        await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id= ${id}`;

        
        res.json({success: true, creations});
    }catch (error) {
        res.json({success: false, message: error.message});
    }
}