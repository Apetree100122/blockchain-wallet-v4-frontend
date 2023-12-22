import React from 'react'
import { useDispatch } from 'react-redux'
import { destroy } from 'redux-form'

import { Button, Icon, Text } from 'blockchain-info-components'
import FlyoutFooter from 'components/Flyout/Footer'
import { setDWStep } from 'data/components/brokerage/slice'
import { BankDWStepType } from 'data/types'

import { Header } from '../Header'
import { WIRE_BANK_FORM } from './constants'
import { FieldsWrapper } from './StepsStyles'

type Props = { bankName: string }

const Success = ({ bankName }: Props) => {
  const dispatch = useDispatch()

  const onConfirm = () => {
    dispatch(destroy(WIRE_BANK_FORM))
    dispatch(setDWStep({ dwStep: BankDWStepType.BANK_LIST }))
  }

  return (
    <>
      <FieldsWrapper>
        <Header />
        <Icon name='bank-filled' />
        <div style={{ textAlign: 'center' }}>
          <Text size='20px' weight={600} color='grey900' style={{ marginBottom: '0.5rem' }}>
            Your {bankName} wire account has been added
          </Text>
          <Text size='16px' weight={500} color='grey600'>
            You can now cash out funds from Blockchain.com via wire transfer. Funds typically arrive
            in 1-3 business days.
          </Text>
        </div>
      </FieldsWrapper>
      <FlyoutFooter collapsed>
        <Button data-e2e='addWireBankSuccess' fullwidth nature='primary' onClick={onConfirm}>
          Done
        </Button>
      </FlyoutFooter>
    </>
  )
}

export default Success
