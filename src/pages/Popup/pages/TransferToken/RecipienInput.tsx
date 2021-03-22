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
      label={t("recipient_upper")}
      rules={[
        { required: true, message: t("enter_recipient_address") },
        {
          validator: (_rule: RuleObject, value, callback) => {
            if (value && !validateAddress(value)) {
              callback(t("recipient_address_invalid"));
            } else {
              callback();
            }
          },
        },
      ]}
    >
      <Input size="large" placeholder={`${t("address")} (io...)`} />
    </Form.Item>
  );
};
