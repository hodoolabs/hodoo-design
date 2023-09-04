import { Dispatch, SetStateAction } from 'react';
import { InputValueType } from '../types/common';

const useInput = (setInputValues: Dispatch<SetStateAction<InputValueType>>) => {
	const handleInputsValue = (type: string, value: string) => {
		setInputValues((state) => ({ ...state, [type]: { ...state[type], value: value } }));
	};

	const handleInputsError = (type: string, error: string) => {
		setInputValues((state) => ({ ...state, [type]: { ...state[type], error: error } }));
	};

	return { handleInputsValue, handleInputsError };
};

export default useInput;
