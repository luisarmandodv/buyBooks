import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  Modal,
  Text
} from 'react-native';
import styled from 'styled-components';

const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const LogoText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-style: italic;
  color: #292929;
`;

const HeaderView = styled.View`
  height: 80px;
  margin-top: 10px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom-width: 4px;
  border-bottom-color: #ccc;
`;

const CartImageBackground = styled.ImageBackground`
  width: 40px;
  height: 40px;
`;

const BannerImageBackground = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const OverlayHeaderText = styled.Text`
  box-shadow: 0px 2px #000;
  align-self: center;
  font-size: 20px;
  font-style: italic;
  color: #292929;
  text-align: center;
  padding: 8px;
  margin-top: 8px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const OverlayTextText = styled.Text`
  box-shadow: 0px 2px #000;
  align-self: center;
  font-size: 12px;
  font-style: italic;
  color: #292929;
  text-align: center;
  padding: 8px;
  margin-top: 8px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`;

const ContentContainerView = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
`;

const Col1View = styled.View`
  flex: 1;
  padding: 5px;
`;

const Col2View = styled.View`
  flex: 2;
  padding: 5px;
`;

const ContentBannerView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export default class App extends Component {
  render() {
    return (
      <ContainerScrollView>
        <HeaderView>
          <CartImageBackground source={require('../assets/images/cart.png')} />
          <LogoText>Buy Books</LogoText>
        </HeaderView>
        <BannerImageBackground
          source={require('../assets/images/header_books.png')}
        >
          <OverlayHeaderText>- React Native -</OverlayHeaderText>
          <OverlayTextText>Buy your favorites books</OverlayTextText>
        </BannerImageBackground>
        <ContentContainerView>
          <Col2View>
            <TouchableOpacity>
              <ImageBackground source={require('../assets/images/b1.jpg')}>
                <OverlayHeaderText>Fiction</OverlayHeaderText>
              </ImageBackground>
            </TouchableOpacity>
          </Col2View>

          <Col1View>
            <TouchableOpacity>
              <ImageBackground source={require('../assets/images/b2.jpg')}>
                <OverlayHeaderText>Terror</OverlayHeaderText>
              </ImageBackground>
            </TouchableOpacity>
          </Col1View>

          <ContentBannerView>
            <TouchableOpacity>
              <ImageBackground source={require('../assets/images/b3.jpg')}>
                <OverlayHeaderText>Classics</OverlayHeaderText>
                <OverlayTextText>Buy this book today!</OverlayTextText>
              </ImageBackground>
            </TouchableOpacity>
          </ContentBannerView>

          <Col2View>
            <TouchableOpacity>
              <ImageBackground source={require('../assets/images/b4.jpg')}>
                <OverlayHeaderText>Children's Books</OverlayHeaderText>
                <OverlayTextText>Try One Today!</OverlayTextText>
              </ImageBackground>
            </TouchableOpacity>
          </Col2View>
        </ContentContainerView>
      </ContainerScrollView>
    );
  }
}
