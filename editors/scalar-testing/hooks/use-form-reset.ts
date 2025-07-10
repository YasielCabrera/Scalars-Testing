import { useCallback, useState } from "react";

interface UseFormResetProps<T> {
  onSubmitCallback: (data: T) => void;
  resetOnSuccessfulSubmit?: boolean;
  initialFormKey?: number;
  formId?: string;
}

export function useFormReset<T>({ onSubmitCallback, resetOnSuccessfulSubmit = true, initialFormKey = 0, formId = 'default' }: UseFormResetProps<T>) {
  const [formKey, setFormKey] = useState(initialFormKey);
  
  const onSubmit = useCallback((data: T) => {
    onSubmitCallback(data);
    if (resetOnSuccessfulSubmit) {
      setFormKey((prev) => prev + 1);
    }
  }, [onSubmitCallback, resetOnSuccessfulSubmit, formId]);

  return {
    formKey: `${formId}-${formKey}`,
    onSubmit,
  };
} 