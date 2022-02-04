import React from 'react';
import {Container,Contenthref,ContentApresentation,ContentLogo,Socials,Copy} from "./styled";
import Logo from "../Logo";
import ButtonFacebook from "../ButtonsFooter/ButtonFacebook";
import ButtonTwitter from "../ButtonsFooter/ButtonTwitter";
import ButtonInsta from "../ButtonsFooter/ButtonInsta";

function index() {
  return (
    <Container>
        <ContentApresentation>
            <ContentLogo>
                <Logo/>
                <p>Monitoramento Online e Gestão de Ativos</p>
                <p>em um só lugar.</p>
            </ContentLogo>

            <Socials>
                <ButtonFacebook/>
                <ButtonTwitter/>
                <ButtonInsta/>
            </Socials>

            <Copy>
                <p>©2022TRACTIN</p>
            </Copy>
        </ContentApresentation>

        <Contenthref>
            <ul>
                <li>
                    <h6>Product</h6>
                </li>
                <li><a href="Download">Download </a></li>
                <li><a href="Pricing">Pricing </a></li>
                <li><a href="Locations">Locations </a></li>
                <li><a href="Server">Server </a></li>
                <li><a href="Countries">Countries </a></li>
                <li><a href="Blog">Blog </a></li>
            </ul>
            <ul>
                <li>
                    <h6>Sobre a Tractian</h6>
                </li>
                <li><a href="know">Conheça a Tractian </a></li>
                <li><a href="FAQ">FAQ</a></li>
                <li><a href="Tutorials">Tutorials</a></li>
                <li><a href="About">About Us</a></li>
                <li><a href="Privacy">Privacy Policy</a></li>
                <li><a href="Terms">Terms of Service</a></li>
            </ul>
            <ul>
                <li>
                    <h6>Fale Conosco</h6>
                </li>
                <li><a href="Contato">Contato </a></li>
                <li><a href="Indique">Indique e ganhe </a></li>
            </ul>
        </Contenthref>
    </Container>
  );
}

export default index;