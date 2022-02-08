import events from 'events'
import { SystemAdminLogInAttemptListener } from "./SystemAdminLogInAttemptListener";
import {eventObject} from "../index";

const eventListenerMap = {
    'SystemAdminLogInAttemptEvent': SystemAdminLogInAttemptListener
}

export async function initiateEventListeners(): Promise<void> {
    for(let [eventName, listenerName] of Object.entries(eventListenerMap)) {
        console.log('Listening for : ', eventName)
        eventObject.on(eventName, (data: any) => {
            listenerName(eventName, data)
        })
    }
}

