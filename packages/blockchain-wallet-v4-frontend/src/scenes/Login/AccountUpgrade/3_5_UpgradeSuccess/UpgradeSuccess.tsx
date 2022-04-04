import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Wrapper } from 'components/Public'
import { actions } from 'data'
import { LOGIN_FORM } from 'data/auth/model'
import { UpgradeSteps } from 'data/auth/types'

import { CenteredTitle, StyledTemporaryButton } from '../AccountUpgrade.models'

const UpgradeSuccess = (props) => {
  return (
    <>
      <Wrapper>
        <CenteredTitle
          size='20px'
          weight={600}
          color='black'
          style={{ marginTop: '8px' }}
          lineHeight='1.5'
        >
          <FormattedMessage
            id='scenes.login.upgrade.upsell.header'
            defaultMessage='UPGRADE_SUCCESS'
          />
        </CenteredTitle>
      </Wrapper>
      <StyledTemporaryButton
        onClick={() =>
          props.formActions.change(LOGIN_FORM, 'step', UpgradeSteps.GOOGLE_AUTH_VERIFY)
        }
        type='button'
      >
        Prev Step
      </StyledTemporaryButton>
      <StyledTemporaryButton
        onClick={() => props.formActions.change(LOGIN_FORM, 'step', UpgradeSteps.YUBIKEY_SETUP)}
        type='button'
      >
        Next Step
      </StyledTemporaryButton>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  formActions: bindActionCreators(actions.form, dispatch)
})

const connector = connect(null, mapDispatchToProps)

export type Props = ConnectedProps<typeof connector>

export default connect(null, mapDispatchToProps)(UpgradeSuccess)
