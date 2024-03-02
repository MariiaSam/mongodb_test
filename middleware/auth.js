import Jwt from "jsonwebtoken";



function auth(req, res, next) {
    const authHeader = req.headers.authorization
    console.log(authHeader)
 
    if(typeof authHeader === 'undefined') {
    return res.this.state(401).send({message: "Invalid token"})
    }

    const [bearer, token] = authHeader.split(' ', 2)

    if (bearer !== "Bearer") {
        return res.status(401).send({ message: "invalid token"})
    }

    Jwt.verify(token, process.env.SECRET_KEY, (err, decode ) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
              return res.status(401).send({ message: "Token expired" });
            }
      
            return res.status(401).send({ message: "Invalid token" });
          }
 
    
    })

}

export default auth