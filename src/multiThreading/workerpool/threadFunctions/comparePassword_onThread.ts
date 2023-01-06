import workerpool from "workerpool";
import { comparePassword } from "../../../services/authService";

workerpool.worker({
    comparePassword
})