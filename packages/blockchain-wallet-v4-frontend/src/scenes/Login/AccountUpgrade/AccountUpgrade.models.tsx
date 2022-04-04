import styled from 'styled-components'

import { Button, Text } from 'blockchain-info-components'

export const Label = styled.div`
  background-color: ${(props) => props.theme.green000};
  color: ${(props) => props.theme.green600};
  text-transform: none;
  border-radius: 4px;
  width: fit-content;
  padding: 4px 6px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
  margin-left: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const CenteredTitle = styled(Text)`
  text-align: center;
`

export const Items = styled.div`
  margin-top: 20px;
`

export const Item = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > span {
    margin-top: 4px;
  }
`

export const TierDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

export const TierTitle = styled(Text)`
  color: ${(props) => props.theme.grey900};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
`

export const ButtonNext = styled(Button)`
  margin-top: 20px;
`

export const ButtonLater = styled(Button)`
  margin-top: 24px;
  color: #0c6cf2;
`
export const StyledTemporaryButton = styled.button`
  margin: 20px 0 0;
`
