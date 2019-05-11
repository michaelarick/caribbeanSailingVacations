import validateEmails from "./validateEmails";
import _ from "lodash";

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Value is required";
    }
  });

  return errors;
}
