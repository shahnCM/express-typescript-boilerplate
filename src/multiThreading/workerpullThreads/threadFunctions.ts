import workerpool from "workerpool";
import { grantToken, comparePassword, jwtSign } from "../../services/authService";
import { bigLoop } from "../../services/testService";

workerpool.worker({
    grantToken,
    comparePassword,
    jwtSign,
    bigLoop
})
