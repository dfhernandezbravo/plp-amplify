import styled, { css } from 'styled-components'


export const ContentViewContainer = styled.div`
    display: flex;
    align-items: center;
    & p {
        font-size: 12px;
        color: #818180;
    }
    & div {
        display: flex;
        margin: 0 5px;
    }
    @media only screen and (max-width: 48em) {
      & p {
        display: none;
      }
    }
    
`