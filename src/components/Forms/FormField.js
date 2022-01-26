import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";

function AppFormField({ name, width, ...props }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        error={errors[name]}
        width={width}
        {...props}
      />
      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
}

export default AppFormField;