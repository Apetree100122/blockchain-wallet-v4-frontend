import { lift, prop } from 'ramda'

import { fiatToString } from 'core/exchange/utils'
import { Exchange } from 'core'
import { selectors } from 'data'

export const getData = (state, coin, amount, defaultCurrency, defaultRates) => {
  const { coinfig } = window.coins[coin]
  const currencyR = selectors.core.settings.getSettings(state).map(prop('currency'))
  const isFiat = coinfig.type.name === 'FIAT'
  const ratesR = selectors.core.data.misc.getRatesSelector(isFiat ? 'BTC' : coin, state)

  let value
  if (!isFiat) {
    value = Exchange.convertCoinToCoin({
      coin,
      value: amount
    })
  }

  const convert = (currency, rates) => {
    if (isFiat) {
      if (coin === currency) return fiatToString({ unit: currency, value: amount })

      value = Exchange.convertFiatToFiat({
        fromCurrency: coin,
        rates,
        toCurrency: currency,
        value: amount
      })
      return fiatToString({ unit: currency, value })
    }
    return Exchange.displayCoinToFiat({
      rates: defaultRates || rates,
      toCurrency: defaultCurrency || currency,
      value
    })
  }
  return lift(convert)(currencyR, ratesR)
}

export default getData
