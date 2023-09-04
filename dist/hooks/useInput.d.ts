import { Dispatch, SetStateAction } from 'react';
import { InputValueType } from '../types/common';
declare const useInput: (setInputValues: Dispatch<SetStateAction<InputValueType>>) => {
    handleInputsValue: (type: string, value: string) => void;
    handleInputsError: (type: string, error: string) => void;
};
export default useInput;
