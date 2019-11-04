import React, { useCallback } from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';

type HandleType = (value: string) => void;
type FormControlEventType = React.FormEvent<FormControlProps & FormControl>;
type UseHandleInputReturnType = (e: FormControlEventType) => void;

export function useHandleInput(handle: HandleType): UseHandleInputReturnType {
  return useCallback(
    e => {
      const fixedEventTarget = e.target as HTMLInputElement;
      handle(fixedEventTarget.value);
    },
    [handle]
  );
}
