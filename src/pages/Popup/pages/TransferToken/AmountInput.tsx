import React from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import { useTranslation } from "react-i18next";

export const AmountInput: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form.Item
      label={t("amount")}
      name="amount"
      rules={[
        {
          required: true,
          message: t("enter_amount_of_tokens"),
        },
      ]}
    >
      <Input size="large" />
    </Form.Item>
  );
};
