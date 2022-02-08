import {sampleBroker} from "../../channels/rabbitmq";
import {dispatchEmailJob} from "../../jobs/emailJob";

export function SystemAdminLogInAttemptListener(eventName: string, data: any): void {
    console.log(eventName, data);
    sampleBroker(data)
    dispatchEmailJob({email: data.email})
}
