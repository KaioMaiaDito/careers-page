import React from "react";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Jobs = () => (
    <Section>
        <Title>Nossas vagas</Title>
        <Description>Estamos crescendo – e rápido – por isso, buscamos mais FERAs para o nosso time.<br />Aproveite para dar uma olhada nas nossas vagas. Pode ser que a oportunidade que você procurava para ir além na sua carreira esteja bem aqui. </Description>
        <Boxes>
            <Box>
                <BoxTitle>Tecnologia e produto</BoxTitle>
                <BoxLink>
                    <a href="https://dito.recruiterbox.com/?team_id=8496&team_id=5567&q=&limit=25#content" target="_blank" rel="noreferrer">Ver vagas</a>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3333 0.666504H4.66663C3.60576 0.666504 2.58834 1.08793 1.8382 1.83808C1.08805 2.58822 0.666626 3.60564 0.666626 4.6665V17.9998C0.666626 19.0607 1.08805 20.0781 1.8382 20.8283C2.58834 21.5784 3.60576 21.9998 4.66663 21.9998H8.66663V24.6665H4.66663C4.313 24.6665 3.97387 24.807 3.72382 25.057C3.47377 25.3071 3.33329 25.6462 3.33329 25.9998C3.33329 26.3535 3.47377 26.6926 3.72382 26.9426C3.97387 27.1927 4.313 27.3332 4.66663 27.3332H23.3333C23.6869 27.3332 24.0261 27.1927 24.2761 26.9426C24.5262 26.6926 24.6666 26.3535 24.6666 25.9998C24.6666 25.6462 24.5262 25.3071 24.2761 25.057C24.0261 24.807 23.6869 24.6665 23.3333 24.6665H19.3333V21.9998H23.3333C24.3942 21.9998 25.4116 21.5784 26.1617 20.8283C26.9119 20.0781 27.3333 19.0607 27.3333 17.9998V4.6665C27.3333 3.60564 26.9119 2.58822 26.1617 1.83808C25.4116 1.08793 24.3942 0.666504 23.3333 0.666504ZM16.6666 24.6665H11.3333V21.9998H16.6666V24.6665ZM24.6666 17.9998C24.6666 18.3535 24.5262 18.6926 24.2761 18.9426C24.0261 19.1927 23.6869 19.3332 23.3333 19.3332H4.66663C4.313 19.3332 3.97387 19.1927 3.72382 18.9426C3.47377 18.6926 3.33329 18.3535 3.33329 17.9998V16.6665H24.6666V17.9998ZM24.6666 13.9998H3.33329V4.6665C3.33329 4.31288 3.47377 3.97374 3.72382 3.7237C3.97387 3.47365 4.313 3.33317 4.66663 3.33317H23.3333C23.6869 3.33317 24.0261 3.47365 24.2761 3.7237C24.5262 3.97374 24.6666 4.31288 24.6666 4.6665V13.9998Z" fill="#00BD6A" />
                    </svg>
                </BoxLink>
            </Box>
            <Box>
                <BoxTitle>Comercial</BoxTitle>
                <BoxLink>
                    <a href="https://dito.recruiterbox.com/?team_id=5436&q=&limit=25#content" target="_blank" rel="noreferrer">Ver vagas</a>
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3333 4H19.3333V2.66667C19.3333 1.95942 19.0523 1.28115 18.5522 0.781048C18.0521 0.280951 17.3739 0 16.6666 0H11.3333C10.626 0 9.94777 0.280951 9.44768 0.781048C8.94758 1.28115 8.66663 1.95942 8.66663 2.66667V4H4.66663C3.60576 4 2.58834 4.42143 1.8382 5.17157C1.08805 5.92172 0.666626 6.93913 0.666626 8V20C0.666626 21.0609 1.08805 22.0783 1.8382 22.8284C2.58834 23.5786 3.60576 24 4.66663 24H23.3333C24.3942 24 25.4116 23.5786 26.1617 22.8284C26.9119 22.0783 27.3333 21.0609 27.3333 20V8C27.3333 6.93913 26.9119 5.92172 26.1617 5.17157C25.4116 4.42143 24.3942 4 23.3333 4ZM11.3333 2.66667H16.6666V4H11.3333V2.66667ZM24.6666 20C24.6666 20.3536 24.5262 20.6928 24.2761 20.9428C24.0261 21.1929 23.6869 21.3333 23.3333 21.3333H4.66663C4.313 21.3333 3.97387 21.1929 3.72382 20.9428C3.47377 20.6928 3.33329 20.3536 3.33329 20V13.3333H8.66663V14.6667C8.66663 15.0203 8.8071 15.3594 9.05715 15.6095C9.3072 15.8595 9.64634 16 9.99996 16C10.3536 16 10.6927 15.8595 10.9428 15.6095C11.1928 15.3594 11.3333 15.0203 11.3333 14.6667V13.3333H16.6666V14.6667C16.6666 15.0203 16.8071 15.3594 17.0572 15.6095C17.3072 15.8595 17.6463 16 18 16C18.3536 16 18.6927 15.8595 18.9428 15.6095C19.1928 15.3594 19.3333 15.0203 19.3333 14.6667V13.3333H24.6666V20ZM24.6666 10.6667H3.33329V8C3.33329 7.64638 3.47377 7.30724 3.72382 7.05719C3.97387 6.80714 4.313 6.66667 4.66663 6.66667H23.3333C23.6869 6.66667 24.0261 6.80714 24.2761 7.05719C24.5262 7.30724 24.6666 7.64638 24.6666 8V10.6667Z" fill="#00BD6A" />
                    </svg>
                </BoxLink>
            </Box>
            <Box>
                <BoxTitle>Gente & Gestão</BoxTitle>
                <BoxLink>
                    <a href="https://dito.recruiterbox.com/?team_id=26339&team_id=27867&q=&limit=25#content" target="_blank" rel="noreferrer">Ver vagas</a>
                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4 12.2932C16.1115 11.6773 16.6821 10.9157 17.0732 10.0599C17.4643 9.20405 17.6667 8.27412 17.6667 7.33317C17.6667 5.56506 16.9643 3.86937 15.7141 2.61913C14.4638 1.36888 12.7682 0.666504 11 0.666504C9.23193 0.666504 7.53624 1.36888 6.286 2.61913C5.03575 3.86937 4.33337 5.56506 4.33337 7.33317C4.33336 8.27412 4.53578 9.20405 4.92688 10.0599C5.31797 10.9157 5.8886 11.6773 6.60004 12.2932C4.73356 13.1383 3.14999 14.5032 2.03868 16.2246C0.927368 17.9459 0.335336 19.9509 0.333374 21.9998C0.333374 22.3535 0.47385 22.6926 0.723898 22.9426C0.973947 23.1927 1.31309 23.3332 1.66671 23.3332C2.02033 23.3332 2.35947 23.1927 2.60952 22.9426C2.85957 22.6926 3.00004 22.3535 3.00004 21.9998C3.00004 19.8781 3.8429 17.8433 5.34319 16.343C6.84348 14.8427 8.87831 13.9998 11 13.9998C13.1218 13.9998 15.1566 14.8427 16.6569 16.343C18.1572 17.8433 19 19.8781 19 21.9998C19 22.3535 19.1405 22.6926 19.3906 22.9426C19.6406 23.1927 19.9798 23.3332 20.3334 23.3332C20.687 23.3332 21.0261 23.1927 21.2762 22.9426C21.5262 22.6926 21.6667 22.3535 21.6667 21.9998C21.6647 19.9509 21.0727 17.9459 19.9614 16.2246C18.8501 14.5032 17.2665 13.1383 15.4 12.2932ZM11 11.3332C10.2089 11.3332 9.43556 11.0986 8.77776 10.659C8.11996 10.2195 7.60727 9.59481 7.30452 8.8639C7.00177 8.133 6.92256 7.32873 7.0769 6.55281C7.23124 5.77689 7.6122 5.06415 8.17161 4.50474C8.73102 3.94533 9.44376 3.56437 10.2197 3.41003C10.9956 3.25569 11.7999 3.3349 12.5308 3.63765C13.2617 3.9404 13.8864 4.45309 14.3259 5.11089C14.7654 5.76869 15 6.54205 15 7.33317C15 8.39404 14.5786 9.41145 13.8285 10.1616C13.0783 10.9117 12.0609 11.3332 11 11.3332ZM23.9867 11.7598C24.84 10.7989 25.3974 9.61191 25.5918 8.34162C25.7862 7.07133 25.6093 5.77194 25.0824 4.59984C24.5555 3.42774 23.7011 2.4329 22.622 1.73507C21.5429 1.03724 20.2851 0.66616 19 0.666504C18.6464 0.666504 18.3073 0.80698 18.0572 1.05703C17.8072 1.30708 17.6667 1.64622 17.6667 1.99984C17.6667 2.35346 17.8072 2.6926 18.0572 2.94265C18.3073 3.19269 18.6464 3.33317 19 3.33317C20.0609 3.33317 21.0783 3.7546 21.8285 4.50474C22.5786 5.25489 23 6.2723 23 7.33317C22.9982 8.03349 22.8124 8.72104 22.4615 9.32707C22.1105 9.93309 21.6065 10.4363 21 10.7865C20.8024 10.9005 20.6373 11.0634 20.5205 11.2595C20.4038 11.4556 20.3394 11.6784 20.3334 11.9065C20.3278 12.1329 20.38 12.3569 20.4849 12.5575C20.5899 12.7581 20.7442 12.9287 20.9334 13.0532L21.4534 13.3998L21.6267 13.4932C23.2339 14.2555 24.5898 15.4612 25.5347 16.9683C26.4796 18.4754 26.9741 20.2211 26.96 21.9998C26.96 22.3535 27.1005 22.6926 27.3506 22.9426C27.6006 23.1927 27.9398 23.3332 28.2934 23.3332C28.647 23.3332 28.9861 23.1927 29.2362 22.9426C29.4862 22.6926 29.6267 22.3535 29.6267 21.9998C29.6376 19.9537 29.1251 17.9388 28.138 16.1466C27.1509 14.3543 25.7218 12.8443 23.9867 11.7598Z" fill="#00BD6A" />
                    </svg>
                </BoxLink>
            </Box>
        </Boxes>
    </Section>
);

const Section = styled.section`
    margin: 64px 0 95px;
    padding: 0 ${GRID(2)};

    @media only screen and (min-width: 1024px) {
        margin: 80px 0 200px;
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 16px;
    font-size: 22px;
    text-align: center;
    font-weight: 700;
    line-height: 33px;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 24px;
        font-size: 36px;
        line-height: 54px;
    }
`

const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0 auto 56px;
    font-size: 16px;
    max-width: 872px;
    text-align: center;
    font-weight: 400;
    line-height: 24px;

    @media only screen and (min-width: 1024px) {
        margin: 0 auto 72px;
    }
`

const Boxes = styled.div`
    gap: ${GRID(2)};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        gap: ${GRID(4)};
        flex-direction: row;
        justify-content: center;
    }
`

const Box = styled.div`
    width: 316px;
    margin: auto;
    border: 1px solid ${COLORS.GRAY_2};
    padding: 24px;
    max-width: 100%;
    border-radius: 24px;

    @media only screen and (min-width: 768px) {
        margin: 0;
    }

    @media only screen and (min-width: 1024px) {
        &:hover {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
        }
    }
`

const BoxTitle = styled.p`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 16px;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
`

const BoxLink = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    a {
        color: ${COLORS.GREEN_MAIN};
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
`

export default Jobs;