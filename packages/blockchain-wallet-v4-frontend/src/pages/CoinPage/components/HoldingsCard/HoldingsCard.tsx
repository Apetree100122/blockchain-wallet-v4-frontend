import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Text } from 'blockchain-info-components'

import { Card } from '../../../../components/Card'
import { Flex } from '../../../../components/Flex'
import { Padding } from '../../../../components/Padding'
import { HoldingsCardComponent } from './types'

export const HoldingsCard: HoldingsCardComponent = ({ actions, coinCode, coinTotal, total }) => {
  return (
    <Card>
      <Padding.All size={16}>
        <Flex flexDirection='column' gap={16}>
          <Text color='grey600' size='14px' weight={500} lineHeight='20px'>
            <FormattedMessage
              id='CoinPage.HoldingsCard.totalBalanceTitle'
              defaultMessage='Your Total {coinCode}'
              values={{
                coinCode
              }}
            />
          </Text>

          <Flex flexDirection='column'>
            <Text
              color='grey900'
              weight={600}
              size='24px'
              lineHeight='32px'
              style={{
                fontFeatureSettings: "'ss01' on, 'zero' on"
              }}
            >
              {total}
            </Text>

            <Text
              color='grey600'
              size='14px'
              lineHeight='20px'
              weight={500}
              style={{
                fontFeatureSettings: "'ss01' on, 'zero' on"
              }}
            >
              {coinTotal} {coinCode}
            </Text>
          </Flex>

          <Flex gap={8}>{actions}</Flex>
        </Flex>
      </Padding.All>
    </Card>
  )
}