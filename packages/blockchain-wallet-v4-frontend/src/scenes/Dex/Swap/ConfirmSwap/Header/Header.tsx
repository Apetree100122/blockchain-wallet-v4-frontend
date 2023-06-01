import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Flex,
  IconArrowLeft,
  Padding,
  PaletteColors,
  SemanticColors,
  Text
} from '@blockchain-com/constellation'
import { withTheme } from 'styled-components'

import CircularProgressBar from 'components/CircularProgressBar'

import { IconContainer, ProgressWrapper } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header = withTheme(({ onClickBack, percentage, theme, timer }: HeaderProps) => (
  <Padding bottom={1}>
    <Flex justifyContent='space-between' alignItems='center'>
      <Flex alignItems='center' gap={16}>
        <IconContainer onClick={onClickBack}>
          <IconArrowLeft color={PaletteColors['grey-400']} label='go back' size='medium' />
        </IconContainer>
        <Text variant='title2' color={SemanticColors.body}>
          <FormattedMessage id='copy.confirmSwap' defaultMessage='Confirm Swap' />
        </Text>
      </Flex>
      <Flex gap={8}>
        <Text color={SemanticColors.body} variant='caption1'>
          <FormattedMessage
            defaultMessage='Refreshes in {seconds}s'
            id='dex.confirm_swap.refresh'
            values={{ seconds: timer }}
          />
        </Text>
        <ProgressWrapper>
          <CircularProgressBar
            strokeWidth={15}
            percentage={percentage}
            styles={{
              strokeLinecap: 'butt',
              trailColor: theme.blue100
            }}
          />
        </ProgressWrapper>
      </Flex>
    </Flex>
  </Padding>
))
