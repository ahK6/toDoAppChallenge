import React, { useContext } from "react";
import { PickerInput } from "../../screens/task/Styled";

export interface PropsParams {
  visible: Boolean;
  mode: String;
  onChange: (event: any, date: Date) => void;
}

const DateTimePicker: React.FC<PropsParams> = ({ visible, mode, onChange }) => {
  return (
    <>
      {visible ? (
        <PickerInput
          value={new Date()}
          mode={mode}
          minimumDate={new Date()}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default DateTimePicker;
