import {eventObject} from "../index";

export function SystemAdminLogInAttemptEventEmitter(eventName: string, data: any): void {
    eventObject.emit(eventName, data)
}
