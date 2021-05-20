const interceptor1 = (req, res, next) => {
    if (req.query.token1 && req.query.token1 == "1234") {
        next();
    } else {
        res.status(400).end("Invalid Token 1");
    }
};

const interceptor2 = (req, res, next) => {
    if (req.query.token2 && req.query.token2 == "4321") {
        next();
    } else {
        res.status(400).end("Invalid Token 2");
    }
};
  
module.exports = { interceptor1, interceptor2 };
  