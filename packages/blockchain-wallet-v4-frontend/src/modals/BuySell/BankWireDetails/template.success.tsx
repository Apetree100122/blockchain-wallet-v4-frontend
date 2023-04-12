import React from 'react'

import { BankWireDetails } from './BankWireDetails'
import { BankWireDetailsUsd } from './BankWireDetailsUsd'
import { Props as OwnProps, SuccessStateType } from './index'

type Props = OwnProps & SuccessStateType

export const Success = (props: Props) => {
  const onClickBack = () => {
    props.buySellActions.setStep({
      cryptoCurrency: props.cryptoCurrency || 'BTC',
      fiatCurrency: props.account.currency || 'USD',
      pair: props.pair,
      step: 'PAYMENT_METHODS'
    })
  }

  switch (props.account.currency) {
    case 'USD':
      return <BankWireDetailsUsd {...props} onClickBack={onClickBack} />
    default:
      return <BankWireDetails {...props} onClickBack={onClickBack} />
  }
}
