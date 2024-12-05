export interface ContextValue {
    user: string | null;
    setUser:React.Dispatch<React.SetStateAction<string |null>>;
    isLoading:boolean;
}