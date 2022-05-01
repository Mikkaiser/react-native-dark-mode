import React from 'react';
import {
  Topic,
  Container,
  DescriptionText,
  Location,
  Name,
  ProfileImage,
  LinkText,
  IconImage,
} from './styles';
import {Linking, ScrollView, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Container>
        <ProfileImage
          source={{
            uri: 'https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/184264969_279652827200364_356257595012727796_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=wbGANQpxgZgAX-HCpIi&edm=APU89FABAAAA&ccb=7-4&oh=00_AT-KE209yotsn3lN18JWLUavwA-uDUbFoEJ_wMJkfJ-YUQ&oe=62750D81&_nc_sid=86f79a',
          }}
        />
        <Name>Mikael</Name>
        <Location>Maceió - Alagoas</Location>
        <Topic>About App</Topic>

        <DescriptionText>
          Hello guys! I made this app in react native, the main technology I've
          been studying lately. I'm enjoying it a lot!
        </DescriptionText>
        <DescriptionText>
          In this specific project, I made the dark mode functionality, which
          suits the theme selected by the user on their device.
        </DescriptionText>
        <DescriptionText>
          I used styled components to style the app (by the way, it's a much
          more comfortable way to style the components, I thought it was really
          cool!). Any tips? Suggestion? Just send!
        </DescriptionText>
        <Topic>Main Technologies</Topic>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconImage
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png',
            }}
          />
          <DescriptionText>React Native</DescriptionText>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconImage
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
            }}
          />
          <DescriptionText>Angular</DescriptionText>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconImage
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
            }}
          />
          <DescriptionText>NodeJS</DescriptionText>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconImage
            source={{
              uri: 'https://neosmart.net/blog/wp-content/uploads/2019/06/dot-NET-Core.png',
            }}
          />
          <DescriptionText>.NET</DescriptionText>
        </View>
        <DescriptionText />
      </Container>
    </ScrollView>
  );
}
