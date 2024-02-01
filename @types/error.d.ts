interface ErrorDetail {
    message: string;       // Description of the error
    timestamp: Date;       // Time when the error occurred
    errorCode?: string;    // Optional error code for categorization or reference
    severity: 'low' | 'medium' | 'high'; // Severity level of the error
    source?: string;       // Optional source of the error (e.g., module or component name)
    stackTrace?: string;   // Optional stack trace for debugging
    userContext?: string;  // Optional context about the user state when the error occurred
}

export type DbError = {
    message: string;
    stack?: StaticRangeInit;
    errorCode?: number
}