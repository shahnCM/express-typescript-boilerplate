import workerpool from "workerpool";
import { jwtSign } from "../../../services/authService";

workerpool.worker({
    jwtSign
})