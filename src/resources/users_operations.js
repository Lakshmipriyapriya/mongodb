var User = require('../../models/user');
var logger = require('./../../loggers');

var getAllUserDetails = function (req, res) {
	logger.info("GET all users");
	return User.find(function (err, users) {
		if (!err) {
			return res.send(users);
		} else {
			res.statusCode = 500;
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
			 res.json({
				error : 'Server error'
			});
		}
	});
}

var getOneUserDetails = function (req, res) {
	return User.findById(req.params.id, function (err, user) {
		//console.log(user)
		if (!err) {
			logger.info('User info has been retrieved successfully');
			return res.json({
				statusCode : 200,
				
				user : user
			});
		} else {
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}

var createUserDetails = function (req, res) {
	var user = new User({
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			emailId : req.body.emailId,
			loginId : req.body.loginId,
			dob : req.body.dob
		});

	return user.save(function (err) {
		if (!err) {
			logger.info("User created");
			return res.json({
				stausCode : 200,
				User : user
			});
		} else {
			logger.error(err);
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'API Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}

var updateUserDetails = function (req, res) {
	//console.log(req.params.id, req.params.id)
	return User.findById( req.params.id, function (err, user) {
		//console.log("..........", user)

		if (!user && user.length == 0) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}
		if (req.body.firstName != null)
			user.firstName = req.body.firstName;
		if (req.body.lastName != null)
			user.lastName = req.body.lastName;
		if (req.body.emailId != null)
			user.emailId = req.body.emailId;
		if (req.body.loginId != null)
			user.loginId = req.body.loginId;
		if (req.body.dob != null)
			user.dob = req.body.dob;

		return user.save(function (err) {
			if (!err) {
				logger.info('User info has been updated');
				return res.json({
					statusCode : 200,
					user : user
				});
			} else {
				if (err.name == 'ValidationError') {
					res.json({
						statusCode : 400,
						error : 'Validation error'
					});
				} else {
					res.json({
						statusCode : 500,
						error : 'Server error'
					});
				}
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
			}
		});
	});
}

var removeUserDetails = function (req, res) {
	return User.findById(req.params.id, function (err, user) {
		if (!user) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}

		return user.remove(function (err) {
			if (!err) {
				logger.info('Removed user successfully');
				 return res.json({
					status : 200
				});
			} else {
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
				 return res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
		})
	});
}



exports.getAllUserDetails = getAllUserDetails
exports.getOneUserDetails = getOneUserDetails
exports.createUserDetails = createUserDetails
exports.updateUserDetails = updateUserDetails
exports.removeUserDetails = removeUserDetails
