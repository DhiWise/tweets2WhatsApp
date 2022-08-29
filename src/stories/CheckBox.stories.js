import { CheckBox } from "components";
export default {
  title: "tweet/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder3",
  variant: "FillBlue500",
  size: "sm",
  inputClassName: "mr-1",
};
