import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import SelectBoxCoinPriceChart from 'components/Form/SelectBoxCoinPriceChart'
import { coinClicked } from 'data/components/priceChart/slice'
import { getPriceChart } from 'data/preferences/selectors'
import { media } from 'services/styles'

const Wrapper = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  width: fit-content;
  display: flex;
  justify-content: center;

  ${media.atLeastTabletL`
    justify-content: flex-start;
  `}
`

const CoinSelector = ({ initialize }) => {
  const dispatch = useDispatch()
  const { coin = 'BTC' } = useSelector(getPriceChart)

  useEffect(() => {
    initialize({ coin })
  }, [coin])

  const onChange = (_, value) => {
    dispatch(coinClicked(value))
  }

  return (
    <Wrapper>
      <Field
        name='coin'
        searchEnabled={false}
        onChange={onChange}
        component={SelectBoxCoinPriceChart}
      />
    </Wrapper>
  )
}

export default reduxForm({ form: 'priceChartCoin' })(CoinSelector)
