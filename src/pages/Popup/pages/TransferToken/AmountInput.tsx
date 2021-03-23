import React from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import { useTranslation } from "react-i18next";

export const AmountInput: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form.Item
      label={t("title.label.amount")}
      name="amount"
      rules={[
        {
          required: true,
          message: t("message.error.enter_tokens"),
        },
      ]}
    >
      <Input size="large" />
    </Form.Item>
  );
};
