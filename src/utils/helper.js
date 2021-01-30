export const parseClassNames = (ar = []) => {
    
    return ar.filter((item) => !!item).join(" ")
}