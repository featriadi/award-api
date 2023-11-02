import Award from "../models/Award.js";

export async function readAwards(req, res) {
    try {
        let findArgs = {};

        for (const key in req.query) {
            const keys = req.query[key].split(",")

            if(key === "minprice" || key === "maxprice"){
                findArgs["point"] = {
                    $gte: req.query.minprice ? req.query.minprice : 0,
                    $lte: req.query.maxprice ? req.query.maxprice : 1,
                }
            }
            else if(keys[0] !== '') {
                findArgs[key] = {
                    $in: keys
                }
            }
            else {
                continue
            }
        }

        const data = await Award.find(findArgs)

        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message,
        });
    }
}
