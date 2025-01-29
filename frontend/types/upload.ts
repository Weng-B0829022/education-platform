// State interface
export interface ContentState {
    content: string;
}

// Actions interface
export interface ContentActions {
    setContent: (content: string) => void;
}

// Combined store type
export type ContentStore = ContentState & ContentActions;