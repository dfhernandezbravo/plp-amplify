import styled, { css } from 'styled-components'

export const TitleContentViewMobileContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
`

export const OrderByFilterContainerMobile = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    & > div {
      width: 50%;
      text-align: center;
      border-right: 1px solid #d8d8d8
    }

    & div:nth-child(2) {
        display: flex;
        align-items: center;
    }

    & div:nth-child(2) div {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    & div:nth-child(2) p {
        margin-left: .5rem;
        font-size: 0.875rem ;
        font-weight: 700;
        color: #1a1a1a;
    }
`