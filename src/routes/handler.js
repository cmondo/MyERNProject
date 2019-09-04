
/**
* Error handler for middleware
* @param {Object} req - Express request object.
* @param {Object} res - Express response object.
*/ 
const awaitErrorHandler = middleware => {
    return async (req, res) => {
        try {
          await middleware(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message : error.name
            });
        }
    };
}

export default awaitErrorHandler;