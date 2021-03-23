import React from "react";
import Form, { RuleObject } from "antd/lib/form";
import Input from "antd/lib/input";
import { validateAddress } from "iotex-antenna/lib/account/utils";
import { useTranslation } from "react-i18next";

export const RecipienInput: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form.Item
      name="recipient"
      label={t("title.label.recipient")}
      rules={[
        { required: true, message: t("message.error.enter_recipient_address") },
        {
          validator: (_rule: RuleObject, value, callback) => {
            if (value && !validateAddress(value)) {
              callback(t("message.error.recipient_address"));
            } else {
              callback();
            }
          },
        },
      ]}
    >
      <Input size="large" placeholder={`${t("placeholder.address")} (io...)`} />
    </Form.Item>
  );
};
