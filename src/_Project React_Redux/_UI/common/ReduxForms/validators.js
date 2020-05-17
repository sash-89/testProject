import is from "is_js";

export const required =(value)=>{
    if(value) return undefined;
    return "Поле обязательное"
};

export const correctEmail =(value)=>{
    if(is.email(value)) return undefined;

    return "Введите корректный Email"
};

export const maxLengthCreator =(value)=>{
    if(value&&value.length>30) return `Максимальная длина ${30} символов`;
    return undefined
};