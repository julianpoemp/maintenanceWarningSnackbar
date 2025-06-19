export declare class MaintenanceWarningSnackbar {
    private options;
    constructor(options: MaintenanceWarningOptions);
    initialize(): Promise<void>;
    showMaintenanceWarning(text: string): void;
}
export declare class MaintenanceWarningOptions {
    jsonURL: string;
    txtURL: string;
    nrOfDaysBe4MaintToDisplayMessage: number;
    simulate: boolean;
    verbose: boolean;
    constructor(partial?: Partial<MaintenanceWarningOptions>);
}
//# sourceMappingURL=maintenance-warning-snackbar.d.ts.map