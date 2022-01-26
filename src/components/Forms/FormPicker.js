import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  icon,
  PickerItemComponent,
  placeholder,
  width,
  visible = true
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        icon={icon}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />

      {visible && <ErrorMessage error={errors[name]} visible={touched[name]} />}
    </>
  );
}

export default AppFormPicker;
