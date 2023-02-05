import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FormContainerProps = typeof __propDef.props;
export type FormContainerEvents = typeof __propDef.events;
export type FormContainerSlots = typeof __propDef.slots;
export default class FormContainer extends SvelteComponentTyped<FormContainerProps, FormContainerEvents, FormContainerSlots> {
}
export {};
