module.exports = (req, res, next) => {
	if(req.user){
		next();
	}else{
		res.status(403).json({
			error: 'Unauthorized'
		});
	}
}