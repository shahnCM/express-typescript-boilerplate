import workerpool from "workerpool";
import {grantToken, comparePassword, jwtSign} from "../../business/services/authService";

workerpool.worker({
    grantToken,
    comparePassword,
    jwtSign
})
