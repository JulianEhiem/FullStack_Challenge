export const getEnumKeyByEnumValue = (myEnum: any, enumValue: any): string => {
    const keys = Object.keys(myEnum).filter((key) => myEnum[key] === enumValue)
    return keys.length > 0 ? keys[0] : '';
}