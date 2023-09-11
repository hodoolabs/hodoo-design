'use client';
const useInput = (setInputValues) => {
    const handleInputsValue = (type, value) => {
        setInputValues((state) => (Object.assign(Object.assign({}, state), { [type]: Object.assign(Object.assign({}, state[type]), { value: value }) })));
    };
    const handleInputsError = (type, error) => {
        setInputValues((state) => (Object.assign(Object.assign({}, state), { [type]: Object.assign(Object.assign({}, state[type]), { error: error }) })));
    };
    return { handleInputsValue, handleInputsError };
};
export default useInput;
