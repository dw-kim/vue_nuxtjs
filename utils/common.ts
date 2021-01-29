
export function isNull(value:any) {
    if(value === undefined) return false;
    else if (!value || value === "") return false;
    return true;
}
