import React from "react";
import { Tag } from "antd";
import { styled } from "onefx/lib/styletron-react";
import { fromRau } from "iotex-antenna/lib/account/utils";

import { Action } from "@/wallet-core/wallet-core";
import { useTranslation } from "react-i18next";

type Props = {
  action: Action;
  onClick?: (e: Action) => void;
};

const ellipsis = (e = "") => `${e.slice(0, 6)}...${e.slice(-4)}`;

const ExecutionItem: React.FC<Props> = (props) => {
  const { execution } = props.action.action.core!;
  const { t } = useTranslation();
  return (
    <Container onClick={() => props.onClick && props.onClick(props.action)}>
      <ItemContent>
        <OverView>
          <Tag color="blue">{t("render.key.execution")}</Tag>
          <ActStatus>{t("render.value.success")}</ActStatus>
        </OverView>
        <DetailView>
          <Account>
            <span>{fromRau(execution!.amount, "IOTX")}</span>
            <span> IOTX</span>
          </Account>
          <Address>
            <span>{t("render.key.contract")}: </span>
            {ellipsis(execution!.contract)}
          </Address>
        </DetailView>
      </ItemContent>
    </Container>
  );
};

const TransferItem: React.FC<Props> = (props) => {
  const { transfer } = props.action.action.core!;
  const { t } = useTranslation();
  return (
    <Container onClick={() => props.onClick && props.onClick(props.action)}>
      <ItemContent>
        <OverView>
          <Tag color="blue">{t("render.key.transfer")}</Tag>
          <ActStatus>{t("render.value.success")}</ActStatus>
        </OverView>
        <DetailView>
          <Account>
            <span>{fromRau(transfer!.amount, "IOTX")}</span>
            <span> IOTX</span>
          </Account>
          <Address>
            <span>{t("render.key.recipient")}: </span>
            {ellipsis(transfer!.recipient)}
          </Address>
        </DetailView>
      </ItemContent>
    </Container>
  );
};

const RestakeItem: React.FC<Props> = (props) => {
  const { stakeRestake } = props.action.action.core!;
  const { t } = useTranslation();
  return (
    <Container onClick={() => props.onClick && props.onClick(props.action)}>
      <ItemContent>
        <OverView>
          <Tag color="blue">{t("render.key.restake")}</Tag>
          <ActStatus>{t("render.value.success")}</ActStatus>
        </OverView>
        <DetailView>
          <Account>
            <span>{t("render.key.staked_duration")}: </span>
            <span>{stakeRestake?.stakedDuration}</span>
          </Account>
          <Address>
            <span>{t("render.key.auto_stake")}: </span>
            <span>{String(stakeRestake?.autoStake)}</span>
          </Address>
        </DetailView>
      </ItemContent>
    </Container>
  );
};

const StakeItem: React.FC<Props> = (props) => {
  const { stakeCreate } = props.action.action.core!;
  const { t } = useTranslation();
  return (
    <Container onClick={() => props.onClick && props.onClick(props.action)}>
      <ItemContent>
        <OverView>
          <Tag color="blue">{t("render.key.stake")}</Tag>
          <span>
            <span>{t("render.key.staked_amount")}: </span>
            <span>{fromRau(stakeCreate!.stakedAmount, "IOTX")}</span>
          </span>
        </OverView>
        <DetailView>
          <Account>
            <span>{t("render.key.staked_duration")}: </span>
            <span>{stakeCreate?.stakedDuration}</span>
          </Account>
          <Address>
            <span>{t("render.key.candidate_name")}: </span>
            <span>{String(stakeCreate?.candidateName)}</span>
          </Address>
        </DetailView>
      </ItemContent>
    </Container>
  );
};

export const ActionItem: React.FC<Props> = (props) => {
  if (props.action.action.core?.transfer) {
    return <TransferItem {...props}></TransferItem>;
  }
  if (props.action.action.core?.execution) {
    return <ExecutionItem {...props}></ExecutionItem>;
  }
  if (props.action.action.core?.stakeRestake) {
    return <RestakeItem {...props}></RestakeItem>;
  }
  if (props.action.action.core?.stakeCreate) {
    return <StakeItem {...props}></StakeItem>;
  }
  console.log(props.action.action);
  return null;
};

const Container = styled("div", () => ({
  width: "100%",
  height: "55px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  cursor: "pointer",
}));

const ItemContent = styled("div", ({ $theme }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginLeft: "10px",
  marginRight: "10px",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: $theme.colors.black40,
}));

const OverView = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
});

const ActStatus = styled("div", ({ $theme }) => ({
  color: $theme.colors.primary,
  fontSize: "12px",
}));

const DetailView = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-end",
});

const Account = styled("div", () => ({}));
const Address = styled("div", {
  fontSize: "12px",
});
