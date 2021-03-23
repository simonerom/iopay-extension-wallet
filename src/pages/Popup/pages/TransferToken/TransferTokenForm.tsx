import React from "react";
import Form from "antd/lib/form";
import { styled } from "onefx/lib/styletron-react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import { useTranslation } from "react-i18next";
import { AssetSelect } from "./AssetSelect";
import { TransactionFeeInput } from "./TransactionFeeInput";
import { AmountInput } from "./AmountInput";
import { RecipienInput } from "./RecipienInput";

type Props = {
  onFinish?: (values: any) => void;
  onCancel?: (values: any) => void;
};

export const TransferTokenForm: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  return (
    <Container>
      <Form
        form={form}
        name="form"
        onFinish={props.onFinish}
        className="transferForm"
      >
        <RecipienInput />
        <AssetSelect form={form} />
        <AmountInput />
        <TransactionFeeInput form={form} />
        <Form.Item>
          <Row justify="space-between">
            <Col>
              <Button size="large" onClick={props.onCancel}>
                {t("action.type.cancel")}
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {t("action.type.next")}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled("div", {
  textAlign: "left",
  padding: "16px",
});
