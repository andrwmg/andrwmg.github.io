import { styled } from "@mui/system";
import React from "react";
import './PortfolioCard.css'

export default function PortfolioCard({ src, wide, company, title, body, bullets, productUrl, infoUrl }) {

    const cardClass = wide ? "Card Card-wide" : "Card"

    console.log(cardClass)

    return (
        <div className={cardClass}>
            <div className="Card-Image">
                <div className="Card-Overlay" />
                {src.map(s => (
                    <img key={s} src={s} alt="" />
                ))}
            </div>
            <div className="Card-text">
                <div className="Card-company">
                    {company}
                </div>
                <div className="Card-title">
                    {title}
                </div>
                <div className="Card-body">
                    {bullets ? 
                    <ul>
                    {bullets.map(b => (
                        <li key={b}>{b}</li>
                    ))}
                    </ul> :
                    body || 'Hello there! This is the body of the card that I want to create. It should work, but who the fuck really knows, am I right? Jeez this is getting long. Maybe I should just quit now and go to bed or something.'
                    }
                </div>
            </div>
            <div className="Card-buttons">
                <a href={productUrl && productUrl}>
                    <button className="primary">Product Page</button>
                </a>
                {/* <a href={infoUrl && infoUrl}>
                    <button className="secondary">More Info</button>
                </a> */}
                <div className="textButton">More Info</div>
            </div>
        </div>
    )
}

const Card = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box',
    position: 'relative',
    color: 'white',
    minHeight: '400px',
    width: '300px',
    minWidth: '300px',
    alignItems: 'center',
    border: 'none',
    borderRadius: '12px',
    textAlign: 'left',
    backgroundImage: 'linear-gradient(0deg, rgba(100,100,255,.6), rgba(100,100,255,.2))',
})

const Overlay = styled('div')({
    boxSizing: 'border-box',
    position: 'absolute',
    borderRadius: '12px',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    opacity: 0,
    transition: 'all .2s ease-in-out',
    zIndex: 1,
})